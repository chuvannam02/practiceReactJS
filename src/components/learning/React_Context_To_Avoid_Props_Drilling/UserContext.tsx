/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 4/29/2025
 * @Time 11:20 PM
 */
import {createContext, ReactNode, useContext, useReducer} from "react";

// Định nghĩa kiểu dữ liệu cho User
export type User = {
    name: string;
    role: string;
};

type Action = { type: "update"; payload: User };

const reducer = (state: User, action: Action): User => {
    switch (action.type) {
        case "update":
            return action.payload;
        default:
            return state;
    }
};

// Tạo Context cho User
// export const UserContext = createContext<User | null>(null);
const UserContext = createContext<{
    user: User;
    updateUser: (user: User) => void;
} | null>(null);

// Tạo hook để sử dụng UserContext
// Hook này giúp chúng ta dễ dàng sử dụng UserContext mà không cần phải gọi useContext(UserContext) mỗi lần
// Chúng ta chỉ cần gọi useUser() là có thể lấy được giá trị của UserContext
// useUser() sẽ trả về giá trị của UserContext, hoặc null nếu không có giá trị nào được cung cấp
export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, dispatch] = useReducer(reducer, {
        name: "Nguyễn Văn A",
        role: "Quản trị viên",
    });

    const updateUser = (user: User) => dispatch({ type: "update", payload: user });

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
