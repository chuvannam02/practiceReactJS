import { QueryFunction, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { SWPeopleResponse } from "./people.interface";
import { Button, Form, Input } from "antd";
import { useAlert } from "../../_utilities/popups/AlertService.tsx";

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
    const [form] = Form.useForm();
    const [page, setPage] = useState<number>(1);
    const [submittedSearch, setSubmittedSearch] = useState<string>("");

    const { success, error: notifyError, warning, info } = useAlert();

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery<SWPeopleResponse, AxiosError, SWPeopleResponse, PeopleQueryKey>({
        queryKey: ['people', { search: submittedSearch, page }],
        queryFn: fetchPeople,
        enabled: false,
        keepPreviousData: true,
        retry: 2,
        retryDelay: 500,
    });

    useEffect(() => {
        refetch().catch(err => {
            notifyError("Lỗi tải dữ liệu!", err?.message || "Không thể tải dữ liệu");
        });
    }, []);

    const onFinish = async (values: { search: string }) => {
        setPage(1);
        setSubmittedSearch(values.search);
        try {
            const result = await refetch();
            if (result.isError && result.error) {
                notifyError("Lỗi tìm kiếm!", result.error.message);
            }
        } catch (err: any) {
            notifyError("Lỗi hệ thống!", err.message || "Đã xảy ra lỗi không xác định");
        }
    };

    const handleNextPage = async () => {
        if (!isError && data && data.count > 0) {
            const next = page + 1;
            setPage(next);
            try {
                const result = await refetch();
                if (result.isError && result.error) {
                    notifyError("Lỗi khi chuyển trang!", result.error.message);
                }
            } catch (err: any) {
                notifyError("Lỗi hệ thống!", err.message || "Đã xảy ra lỗi khi chuyển trang");
            }
        }
    };

    const handlePreviousPage = async () => {
        const prev = Math.max(page - 1, 1);
        setPage(prev);
        try {
            const result = await refetch();
            if (result.isError && result.error) {
                notifyError("Lỗi khi quay lại!", result.error.message);
            }
        } catch (err: any) {
            notifyError("Lỗi hệ thống!", err.message || "Đã xảy ra lỗi khi quay lại");
        }
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-2">Star Wars Characters</h1>

            <Form
                form={form}
                layout="inline"
                onFinish={onFinish}
                autoComplete="off"
                className="mb-4"
            >
                <Form.Item
                    name="search"
                    rules={[{ required: true, message: 'Vui lòng nhập từ khóa tìm kiếm!' }]}
                    className="flex-grow"
                >
                    <Input
                        placeholder="Search characters..."
                        onPressEnter={() => form.submit()}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading || isFetching}
                    >
                        Tìm
                    </Button>
                </Form.Item>
            </Form>

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
                    onClick={handlePreviousPage}
                    disabled={page <= 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {page}</span>
                <button
                    onClick={handleNextPage}
                    className="px-3 py-1 bg-gray-200 rounded"
                >
                    Next
                </button>
            </div>

            <div className="notify mt-6 flex gap-2">
                <Button type="primary" onClick={() => success('Thành công!', 'Đã lưu dữ liệu')}>
                    Show Success
                </Button>
                <Button type="primary" onClick={() => notifyError('Lỗi!', 'Xảy ra lỗi')}>
                    Show Error
                </Button>
                <Button type="primary" onClick={() => warning('Cảnh báo!', 'Đây là cảnh báo')}>
                    Show Warning
                </Button>
                <Button type="primary" onClick={() => info('Thông tin!', 'Đây là thông tin')}>
                    Show Info
                </Button>
            </div>
        </>
    );
};

export default SWPeopleQuery;
