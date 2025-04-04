/**
 * @Project: learn-react
 * @Author: CHUNAM
 * @Date: 4/5/2025
 * @Time: 1:35 AM
 * @File: CountClick.ts
 */
import {useState} from "react";

const CountClick = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    const decreaseCount = () => {
        setCount(prev => prev - 1);
    }

    return (
        <>
            <h1>Chỉ là test thôi mà</h1>
            <h1>Count: {count}</h1>
            <button onClick={handleClick} style={{cursor: 'pointer'}}>Increase</button>
            <button onClick={decreaseCount} style={{cursor: 'pointer'}}>Decrease</button>
        </>
    );
};

export default CountClick;
