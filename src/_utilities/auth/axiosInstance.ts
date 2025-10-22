import axios, { AxiosError } from "axios";

// Hàm refresh token (giữ nguyên logic cũ)
async function refreshToken() {
  // Giả sử bạn có API refresh
  const refresh = localStorage.getItem("refreshToken");
  if (!refresh) throw new Error("No refresh token");

  const res = await axios.post("http://localhost:8000/auth/refresh", {
    refresh,
  });
  const newToken = res.data?.access_token;
  if (newToken) localStorage.setItem("authToken", newToken);
  return newToken;
}

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
});

// 🟢 Interceptor Request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Nếu chưa có signal, tạo mới để có thể abort
    if (!config.signal) {
      const controller = new AbortController();
      config.signal = controller.signal;
      // Gắn controller để bạn có thể truy cập sau nếu cần
      (config as any).controller = controller;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🔴 Interceptor Response
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      try {
        await refreshToken();
        // Retry request gốc
        return instance(error.config!);
      } catch (err) {
        console.error("Refresh token failed:", err);
      }
    }

    // Nếu là lỗi huỷ request thì bỏ qua log
    if (axios.isCancel(error)) {
      console.warn("Request cancelled:", error.message);
      return;
    }

    throw error;
  }
);

export default instance;
