/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 5/1/2025
 * @Time 4:44 PM
 */
import {ComponentProps, useState} from "react";

// type ComponentProps<"div">
// Là một utility type của TypeScript,
// giúp bạn lấy tất cả các props mà một HTML element cụ thể (trong trường hợp này là <div>) mặc định hỗ trợ trong JSX.
// Ví dụ:
// type DivProps = ComponentProps<"div">;
// DivProps sẽ bao gồm tất cả props của <div> như:
//
// className
//
// id
//
// style
//
// onClick
//
// aria-*
//
// ref
//
// v.v...
type CallAPIProps = ComponentProps<"div"> & {
  apiUrl: string;
};

export default function CallAPI({apiUrl, ...rest}: CallAPIProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
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
        <div className="p-4" {...rest}>
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
};
