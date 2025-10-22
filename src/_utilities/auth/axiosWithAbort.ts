/**
 * @File: axiosWithAbort.ts
 * @Author: CHUNAM
 * @Description: Tự động thêm AbortController cho tất cả request
 */
import axiosInstance from "./axiosInstance";

export interface AxiosRequestWithAbortOptions {
  signal?: AbortSignal;
  [key: string]: any;
}

class AxiosWithAbort {
  private readonly controllers = new Map<string, AbortController>();

  private getKey(method: string, url: string) {
    return `${method.toUpperCase()}::${url}`;
  }

  /** Huỷ request theo key (method + url) */
  abort(method: string, url: string) {
    const key = this.getKey(method, url);
    const controller = this.controllers.get(key);
    if (controller) {
      controller.abort();
      this.controllers.delete(key);
    }
  }

  /** Huỷ tất cả request đang chờ */
  abortAll() {
    this.controllers.forEach((c) => c.abort());
    this.controllers.clear();
  }

  private async request<T, V>(
    method: string,
    url: string,
    data?: V,
    options: AxiosRequestWithAbortOptions = {}
  ) {
    const key = this.getKey(method, url);

    // Nếu đã có request trùng → huỷ trước khi gửi mới
    this.abort(method, url);

    const controller = new AbortController();
    this.controllers.set(key, controller);

    try {
      const response = await axiosInstance.request<T>({
        method,
        url,
        data,
        signal: controller.signal,
        ...options,
      });

      return response;
    } finally {
      // Xoá controller sau khi xong
      this.controllers.delete(key);
    }
  }

  get<T>(url: string, options?: AxiosRequestWithAbortOptions) {
    return this.request<T, undefined>("get", url, undefined, options);
  }

  post<T, V>(url: string, data?: V, options?: AxiosRequestWithAbortOptions) {
    return this.request<T, V>("post", url, data, options);
  }

  put<T, V>(url: string, data?: V, options?: AxiosRequestWithAbortOptions) {
    return this.request<T, V>("put", url, data, options);
  }

  patch<T, V>(url: string, data?: V, options?: AxiosRequestWithAbortOptions) {
    return this.request<T, V>("patch", url, data, options);
  }

  delete<T, V>(url: string, options?: AxiosRequestWithAbortOptions) {
    return this.request<T, V>("delete", url, undefined, options);
  }
}

export const axiosWithAbort = new AxiosWithAbort();
