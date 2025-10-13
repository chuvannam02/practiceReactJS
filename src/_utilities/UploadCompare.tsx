import { useState, useRef } from "react";
import SparkMD5 from "spark-md5";
import axios, { CancelTokenSource } from "axios";

interface Chunk {
    index: number;
    start: number;
    end: number;
}

const UploadCompare: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const [uploadedChunks, setUploadedChunks] = useState<Set<number>>(new Set());
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const cancelTokenRef = useRef<CancelTokenSource | null>(null);

    const handleSelectFile = (f: File) => {
        setFile(f);
        setProgress(0);
        setUploadedChunks(new Set());
        setError("");
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) handleSelectFile(e.dataTransfer.files[0]);
    };

    const handleCancel = () => {
        cancelTokenRef.current?.cancel("User canceled upload");
        setUploading(false);
        setProgress(0);
    };

    const uploadSmart = async () => {
        if (!file) return;
        setUploading(true);
        setProgress(0);
        const size = file.size;

        if (size < 50 * 1024 * 1024) {
            await uploadNormal(file);
        } else {
            const chunkSize = size < 500 * 1024 * 1024 ? 10 * 1024 * 1024 : 20 * 1024 * 1024;
            const concurrency = size < 500 * 1024 * 1024 ? 3 : 5;
            await uploadChunked(file, chunkSize, concurrency);
        }
        setUploading(false);
    };

    const uploadNormal = async (file: File) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            cancelTokenRef.current = axios.CancelToken.source();
            await axios.post("http://localhost:8080/api/upload/upload-normal", formData, {
                headers: { "Content-Type": "multipart/form-data" },
                cancelToken: cancelTokenRef.current.token,
                onUploadProgress: (e) => e.total && setProgress(Math.round((e.loaded / e.total) * 100)),
            });
        } catch (err: any) {
            if (axios.isCancel(err)) setError("Upload canceled");
            else setError("Upload error");
        }
    };

    const uploadChunked = async (file: File, CHUNK_SIZE: number, CONCURRENCY: number) => {
        const uploadId = SparkMD5.hash(file.name + file.size + Date.now());
        const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

        // Resume: check uploaded chunks
        try {
            const res = await axios.get("http://localhost:8080/api/upload/status", { params: { uploadId } });
            setUploadedChunks(new Set(res.data || []));
        } catch {}

        const chunks: Chunk[] = [];
        for (let i = 0; i < totalChunks; i++) {
            const start = i * CHUNK_SIZE;
            const end = Math.min(start + CHUNK_SIZE, file.size);
            chunks.push({ index: i, start, end });
        }

        cancelTokenRef.current = axios.CancelToken.source();

        const uploadChunk = async (chunk: Chunk, retry = 0) => {
            if (uploadedChunks.has(chunk.index)) return;

            const blob = file.slice(chunk.start, chunk.end);
            const formData = new FormData();
            formData.append("file", blob);
            formData.append("uploadId", uploadId);
            formData.append("chunkIndex", chunk.index.toString());
            formData.append("chunkSize", CHUNK_SIZE.toString());

            try {
                await axios.post("http://localhost:8080/api/upload/chunk", formData, {
                    cancelToken: cancelTokenRef.current?.token,
                });
                setUploadedChunks((prev) => new Set(prev).add(chunk.index));
                setProgress(Math.round((uploadedChunks.size / totalChunks) * 100));
            } catch (err) {
                if (retry < 3) await uploadChunk(chunk, retry + 1);
                else throw err;
            }
        };

        while (chunks.length > 0) {
            const batch = chunks.splice(0, CONCURRENCY);
            await Promise.all(batch.map((c) => uploadChunk(c)));
        }

        // Finish upload
        await axios.post("http://localhost:8080/api/upload/finish", null, {
            params: { uploadId, fileName: file.name },
        });
    };

    return (
        <div style={{ width: 400, margin: "auto", padding: 20 }}>
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                style={{
                    border: "2px dashed #ccc",
                    borderRadius: 6,
                    padding: 40,
                    textAlign: "center",
                    cursor: "pointer",
                    marginBottom: 10,
                }}
                onClick={() => document.getElementById("fileInput")?.click()}
            >
                {file ? (
                    <>
                        <p>{file.name}</p>
                        <p>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </>
                ) : (
                    <p>Drag & drop a file here or click to select</p>
                )}
                <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => e.target.files && handleSelectFile(e.target.files[0])}
                />
            </div>

            {file && (
                <>
                    <div style={{ width: "100%", height: 10, background: "#eee", borderRadius: 5 }}>
                        <div style={{ width: `${progress}%`, height: 10, background: "green", borderRadius: 5 }} />
                    </div>
                    <p>{progress}%</p>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div style={{ display: "flex", gap: 10 }}>
                        <button onClick={uploadSmart} disabled={uploading}>
                            {uploading ? "Uploading..." : "Upload"}
                        </button>
                        <button onClick={handleCancel} disabled={!uploading}>
                            Cancel
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default UploadCompare;
