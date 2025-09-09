/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/9/2025
 * @Time 9:44 AM
 */
import {useCallback, useState} from "react";
import Items from "./Items.tsx";

const Demo: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    // ❌ mỗi lần re-render lại tạo một function mới
    // setState sẽ khiến re-render lại component và cập nhật biến count lên giao diện
    // nó gặp lại hàm handleChange mới và truyền về <Items onChange={handleChange} />
    // Dẫn đến việc re-render lại component con
    // const handleChange = () => {
    // };

    const handleChange = useCallback(() => {
    }, [count]);

    return (
        <div className={"tutorial-useCallback"}>
            <Items onChange={handleChange}/>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount((prev: number) => prev + 1)}>
                Increment
            </button>
        </div>
    );
};

export default Demo;
