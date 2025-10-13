/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/21/2025
 * @Time 10:55 PM
 */
import { useState } from "react";
import SparkMD5 from "spark-md5";
import axios from "axios";
import "./UploadFile.scss";

const CHUNK_SIZE = 1024 * 1024 * 5; // 5MB
const MAX_SIZE = 1024 * 1024 * 100; // 100MB

const UploadFile: React.FC = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<string>("");
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

    const handleUpload = async (event: any) => {
        const file = event.target.files[0];
        if (!file) return;

        // 🚨 Check max size
        if (file.size > MAX_SIZE) {
            setError(`❌ File vượt quá dung lượng tối đa (${MAX_SIZE / 1024 / 1024} MB)`);
            setProgress(0);
            return;
        }

        setError("");
        setProgress(0);

        // Tạo uploadId từ md5(file.name + size + timestamp)
        const uploadId = SparkMD5.hash(file?.name + file.size + Date.now());
        const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

        for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
            const start = chunkIndex * CHUNK_SIZE;
            const end = Math.min(start + CHUNK_SIZE, file.size);
            const chunk = file.slice(start, end);

            const formData = new FormData();
            formData.append("file", chunk);
            formData.append("uploadId", uploadId);
            formData.append("chunkIndex", chunkIndex.toString());
            formData.append("totalChunks", totalChunks.toString());
            formData.append("fileName", file.name);

            try {
                await axios.post("http://localhost:8080/api/upload/chunk", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                setProgress(Math.round(((chunkIndex + 1) / totalChunks) * 100));
            } catch (err: any) {
                console.error("❌ Chunk upload failed", chunkIndex, err);

                if (err.response && err.response.status === 413) {
                    setError("❌ File vượt quá dung lượng tối đa cho phép!");
                } else {
                    setError("❌ Upload lỗi, vui lòng thử lại.");
                }

                setProgress(0);
                return; // ❌ DỪNG HẲN không upload tiếp
            }
        }

        // Gửi request merge sau khi upload xong
        await axios.post("http://localhost:8080/api/upload/merge", null, {
            params: {
                uploadId: uploadId,
                fileName: file.name,
                totalChunks: totalChunks,
            },
        });

        // ✅ Reset progress + clear input + lưu file đã upload
        setProgress(0);
        setUploadedFiles((prev) => [...prev, file.name]);
        event.target.value = ""; // clear file input

        alert("✅ Upload complete!");
    };

    return (
        <div className="upload-container">
            <input type="file" onChange={handleUpload} />
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p>{progress}%</p>
            {error && <p className="error">{error}</p>}

            {/* Hiển thị file đã upload */}
            <div className="uploaded-list">
                <h4>📂 Files đã upload:</h4>
                <ul>
                    {uploadedFiles.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UploadFile;
