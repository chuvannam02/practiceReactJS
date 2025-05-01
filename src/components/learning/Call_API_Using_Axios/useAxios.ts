/**
 * @Project: learn-react
 * @Author: CHUNAM
 * @Date: 5/1/2025
 * @Time: 5:10 PM
 * @File: useAxios.ts
 */
import axios, {AxiosRequestConfig, Method} from "axios";
import {useCallback, useState} from "react";

// custom Hook to fetch data using axios

type UseAxiosReturns<T> = {
    data: T | null;
    error: string | null;
    isLoading: boolean;
    request: (config: {
        url: string;
        method?: Method;
        data?: unknown;
        params?: unknown;
        headers?: Record<string, string>;
        responseType?: AxiosRequestConfig["responseType"];
    }) => Promise<void>;
}

export function useAxios<T = unknown>(): UseAxiosReturns<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const request = useCallback(async ({
                                           url,
                                           method = "GET",
                                           data,
                                           params,
                                           headers,
                                           responseType = "json",
                                       }: {
        url: string;
        method?: Method;
        data?: unknown;
        params?: unknown;
        headers?: Record<string, string>;
        responseType?: AxiosRequestConfig["responseType"];
    }) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.request<T>({
                url,
                method,
                data,
                params,
                headers,
                responseType,
            });
            setData(response.data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unknown error");
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {data, isLoading, error, request};
}
