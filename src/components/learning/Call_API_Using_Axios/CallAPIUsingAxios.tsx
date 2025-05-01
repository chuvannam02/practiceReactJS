/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 5/1/2025
 * @Time 4:49 PM
 */
import {ComponentProps, useState} from "react";
import axios from "axios";

type CallAPIUsingAxiosProps = ComponentProps<"div"> & {
    apiUrl: string;
};

export default function CallAPIUsingAxios({apiUrl, ...rest}: CallAPIUsingAxiosProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(apiUrl);
            if (response.status !== 200) {
                throw new Error("Network response was not ok");
            }
            const result = response.data;
            setData(result);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Unknown error");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div {...rest}>
            <h1>🌗 Call API Using Axios</h1>
            <p>API URL: {apiUrl}</p>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {data && (
                <div>
                    <h2>Data:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
            <button disabled={isLoading} onClick={fetchData} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
                Fetch Data
            </button>
        </div>
    );

}
