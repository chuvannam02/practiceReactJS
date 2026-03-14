import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// 1️⃣ configureStore()

// Giải thích:

// Là hàm tiện lợi bọc createStore của Redux.

// Tự động kết hợp các slice reducers, thêm middleware bạn cung cấp, mặc định có redux-thunk, và bật DevTools.

// Giúp tạo store nhanh gọn, ít boilerplate.

// Ví dụ:
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
  },
});

// Typing
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
