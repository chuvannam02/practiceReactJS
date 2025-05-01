/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 5/1/2025
 * @Time 4:51 PM
 */

import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

type CallAPIUsingReactQueryProps = {
    url: string;
};

export default function CallAPIUsingReactQuery({ url }: CallAPIUsingReactQueryProps) {
    const fetchData = useCallback(async () => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    }, [url]);

    const {
        isLoading,
        error,
        data,
        refetch,
        isFetching,
    } = useQuery({
        queryKey: ["fetchData", url],
        queryFn: fetchData,
        retry: false, // Optional: không retry nếu API lỗi
    });

    return (
        <div className="p-4 border rounded shadow-sm">
            <h1 className="text-xl font-semibold mb-2">🌗 Call API Using React Query</h1>
            <p className="text-gray-600 mb-4">API URL: {url}</p>

            {isLoading ? (
                <p className="text-blue-500">Loading...</p>
            ) : error ? (
                <p className="text-red-500">❌ Error: {(error as Error).message}</p>
            ) : data ? (
                <div>
                    <h2 className="font-medium">✅ Data:</h2>
                    <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : null}

            <button
                disabled={isFetching}
                onClick={() => refetch()}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 disabled:opacity-50"
            >
                {isFetching ? "Fetching..." : "Fetch Data"}
            </button>
        </div>
    );
}
