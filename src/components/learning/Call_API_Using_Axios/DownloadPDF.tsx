import {useAxios} from "./useAxios.ts";

/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 5/1/2025
 * @Time 5:17 PM
 */
function DownloadPDF() {
    const { request, isLoading, error, data } = useAxios<Blob>();

    const handleDownload = async () => {
        await request({
            url: "/api/report/download",
            method: "GET",
            responseType: "blob", // 👈 file sẽ được trả về dưới dạng Blob
        });

        // Sau khi tải, tạo URL để tải xuống
        const blob = new Blob([data as Blob], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "report.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div>
            <button onClick={handleDownload} disabled={isLoading}>Tải PDF</button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default DownloadPDF;
