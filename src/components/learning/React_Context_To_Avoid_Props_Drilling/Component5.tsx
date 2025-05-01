/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 4/29/2025
 * @Time 11:24 PM
 */
import {useUser} from "./UserContext.tsx";
import {useTheme} from "./ThemeContext.tsx";

export default function Component5() {
    // @ts-ignore
    const { user, updateUser } = useUser();
    const { theme, toggleTheme } = useTheme();

    const handleChangeUser = () => {
        updateUser({ name: "Trần Thị B", role: "Người dùng" });
    };

    return (
        <div className="border p-4">
            <h2>Component 5</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <button onClick={handleChangeUser} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
                Đổi người dùng
            </button>
            <br />
            <button onClick={toggleTheme} className="bg-gray-700 text-white px-2 py-1 rounded mt-2">
                Đổi theme ({theme})
            </button>
        </div>
    );
}

