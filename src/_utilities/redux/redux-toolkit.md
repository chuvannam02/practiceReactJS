5️⃣ combineSlices()

Giải thích:

Kết hợp nhiều slice thành 1 reducer tổng.

Hỗ trợ “lazy loading” slice sau khi khởi tạo store.

Ví dụ:
```
import { combineSlices } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';

const rootReducer = combineSlices({
  auth: authReducer,
  user: userReducer
});

export default rootReducer;
```
Lưu ý: Thường configureStore đã làm việc này, nên ít khi dùng trực tiếp.

6️⃣ createAsyncThunk()

Giải thích:

Tạo thunk (hàm async) mà tự động dispatch các action: pending, fulfilled, rejected dựa trên Promise.

Rất tiện cho gọi API.

Ví dụ:
```
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: string) => {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  }
);
```

Trong slice, bạn xử lý state dựa vào extraReducers:
```
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './userThunk';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => { state.loading = true })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => { state.loading = false });
  }
});
```

7️⃣ createEntityAdapter()

Giải thích:

Sinh sẵn reducer + selector để quản lý dữ liệu normalized (dạng danh sách theo id).

Dễ dùng cho lists như users, posts, products.

Ví dụ:
```
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
  }
});

export const { addUser, updateUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
```

8️⃣ createSelector (Reselect)

Giải thích:

Tạo selector memoized để tính toán dữ liệu dựa vào state, tránh tính toán lại không cần thiết.

Ví dụ:
```
import { createSelector } from '@reduxjs/toolkit';

const selectUsers = (state) => state.users.entities;

export const selectAdminUsers = createSelector(
  [selectUsers],
  (users) => Object.values(users).filter(user => user.role === 'admin')
);
```

✅ Tóm tắt:

- configureStore → tạo store dễ dàng

createSlice → slice + reducer + action

createAsyncThunk → gọi API async tự động dispatch pending/fulfilled/rejected

createEntityAdapter → quản lý list data normalized

createSelector → selector tối ưu

createReducer + createAction → cơ bản hơn nhưng slice đã bao gồm
