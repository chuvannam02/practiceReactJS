import {useAxios} from "./useAxios.ts";
import {useEffect} from "react";

/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 5/1/2025
 * @Time 5:16 PM
 */
export default function Example() {
    const { data, isLoading, error, request } = useAxios<{ name: string }[]>();

    useEffect(() => {
        request({ url: "/api/users", method: "GET" });
    }, [request]);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
