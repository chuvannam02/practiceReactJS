import { QueryFunction, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { SWPeopleResponse } from "./people.interface";
import {Button} from "antd";
import {useAlert} from "../../_utilities/popups/AlertService.tsx";

// Typed query function
type PeopleQueryKey = ['people', { search: string; page: number }];
const fetchPeople: QueryFunction<SWPeopleResponse, PeopleQueryKey> =
    async ({ queryKey }) => {
        const [_key, { search, page }] = queryKey;
        const response = await axios.get<SWPeopleResponse>(
            "https://swapi.dev/api/people/",
            { params: { search, page } }
        );
        return response.data;
    };

const SWPeopleQuery = () => {
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    const { success, error: notifyError, warning, info } = useAlert();

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery<
        SWPeopleResponse,
        AxiosError,
        SWPeopleResponse,
        PeopleQueryKey
    >({
        queryKey: ['people', { search, page }],
        queryFn: fetchPeople,
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const handleSearch = () => {
        setPage(1);
        console.log("Search:", search);
        console.log("Page:", page);
        console.log("Data:", data);
        refetch();
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-2">Star Wars Characters</h1>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Search characters..."
                    className="border px-2 py-1 rounded flex-grow"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    onClick={handleSearch}
                    disabled={!search}
                    className={`px-4 py-1 rounded text-white ${
                        search ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                    Tìm
                </button>
            </div>

            {(isLoading || isFetching) ? (
                <p>Loading...</p>
            ) : isError ? (
                <p className="text-red-600">Error: {error?.message}</p>
            ) : (
                <ul className="list-disc pl-5 space-y-1">
                    {data?.results.map((person) => (
                        <li key={person.url}>{person.name}</li>
                    ))}
                </ul>
            )}

            <div className="mt-4 flex items-center gap-4">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {page}</span>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            <div className="notify">
                <Button type={"primary"} onClick={() => success('Thành công!', 'Đã lưu dữ liệu')}>
                    Show Success
                </Button>
                <Button type={"primary"} onClick={() => notifyError('Lỗi!', 'Xảy ra lỗi')}>
                    Show Error
                </Button>
                <Button type={"primary"} onClick={() => warning('Cảnh báo!', 'Đây là cảnh báo')}>
                    Show Warning
                </Button>
                <Button type={"primary"} onClick={() => info('Thông tin!', 'Đây là thông tin')}>
                    Show Info
                </Button>
            </div>
        </>
    );
};

export default SWPeopleQuery;
