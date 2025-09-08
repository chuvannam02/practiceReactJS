/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 5/1/2025
 * @Time 4:49 PM
 */
import { ComponentProps, useEffect, useRef, useState } from "react";
import axios from "axios";

type CallAPIUsingAxiosProps = ComponentProps<"div"> & {
  apiUrl: string;
};

export default function CallAPIUsingAxios({
  apiUrl,
  ...rest
}: CallAPIUsingAxiosProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(null);

  // const abortControllerRef = useRef<AbortController | null>(null);

  // const fetchData = async () => {
  //     setIsLoading(true);
  //     setError(null);

  //     // try {
  //     //     const response = await axios.get(apiUrl);
  //     //     if (response.status !== 200) {
  //     //         throw new Error("Network response was not ok");
  //     //     }
  //     //     const result = response.data;
  //     //     setData(result);
  //     // } catch (error: unknown) {
  //     //     if (error instanceof Error) {
  //     //         setError(error.message);
  //     //     } else {
  //     //         setError("Unknown error");
  //     //     }
  //     // } finally {
  //     //     setIsLoading(false);
  //     // }
  //      abortControllerRef.current = new AbortController(); // 👈 tạo mới controller
  //     const signal = abortControllerRef.current.signal;

  //     try {
  //         const response = await axios.get(apiUrl, { signal });
  //         setData(response.data);
  //     } catch (error: any) {
  //         if (axios.isCancel(error)) {
  //             setError("Request was cancelled");
  //         } else if (error.name === "CanceledError") {
  //             setError("Fetch cancelled");
  //         } else {
  //             setError(error.message || "Unknown error");
  //         }
  //     } finally {
  //         setIsLoading(false);
  //     }
  // };

  // useEffect(() => {
  //     return () => {
  //         // 👈 cleanup khi component bị unmount
  //         if (abortControllerRef.current) {
  //             abortControllerRef.current.abort();
  //         }
  //     };
  // }, []);

  //   useEffect(() => {
  //     const controller = new AbortController();

  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       try {
  //         const response = await axios.get(apiUrl, { signal: controller.signal });
  //         setData(response.data);
  //       } catch (err: any) {
  //         if (axios.isCancel(err)) {
  //         } else {
  //           setError(err.message || "Unknown error");
  //         }
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchData();

  //     return () => {
  //       controller.abort();
  //     };
  //   }, [apiUrl]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Giả lập delay
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(resolve, 1000);
          signal.addEventListener("abort", () => {
            clearTimeout(timeout);
            reject(new DOMException("Aborted", "AbortError"));
          });
        });

        const response = await axios.get(apiUrl, { signal });
        setData(response.data);
      } catch (err: any) {
        if (err.name === "AbortError") {
        } else {
          console.error("❌ Error:", err);
          setError(err.message || "Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [apiUrl]);

  return (
    <div {...rest}>
      {/* <h1>🌗 Call API Using Axios</h1>
            <p>API URL: {apiUrl}</p>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {data && (
                <div>
                    <h2>Data:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )} */}
      {/* <button disabled={isLoading} onClick={fetchData} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
                Fetch Data
            </button> */}
      <div className="p-2 border rounded">
        <h2>🌐 Fetching: {apiUrl}</h2>
        {isLoading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {data && <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}
