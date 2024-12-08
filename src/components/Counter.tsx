/**
 * @Project: learn-react
 * @Author Admin
 * @Date 12/4/2024
 * @Time 12:12 AM
 */
import {useState} from "react";

function Counter() {
    // Functional Component in React
    const [number, setNumber] = useState(0);
    const handleClick = () => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    }

    console.log('Render Counter');

    return(
        // React Fragmentation
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    );
}

export default Counter;