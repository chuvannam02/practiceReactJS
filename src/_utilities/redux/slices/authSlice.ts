import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 2️⃣ createReducer()

// Giải thích:

// Cho phép tạo reducer bằng “lookup table” thay vì switch-case.

// Tự động dùng immer, nên bạn có thể viết code “mutable” mà vẫn giữ state immutable.

// Ví dụ:

// import { createReducer } from '@reduxjs/toolkit';

// const initialState = { count: 0 };

// const counterReducer = createReducer(initialState, {
//   increment: (state) => { state.count += 1; },
//   decrement: (state) => { state.count -= 1; }
// });

// 3️⃣ createAction()

// Giải thích:

// Sinh ra action creator từ một string action type.

// Ví dụ:

// import { createAction } from '@reduxjs/toolkit';

// const increment = createAction('counter/increment');

// const action = increment(); // { type: 'counter/increment' }
interface AuthState {
  username?: string;
  roles?: string[];
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

// 4️⃣ createSlice()

// Giải thích:

// Kết hợp createAction + createReducer trong 1 API.

// Nhận: tên slice, state ban đầu, và object reducer functions.

// Tự động tạo slice reducer + action creators + action types.

// Ví dụ:

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<Omit<AuthState, "isLoggedIn">>) => {
      state.username = action.payload.username;
      state.roles = action.payload.roles;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = undefined;
      state.roles = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
