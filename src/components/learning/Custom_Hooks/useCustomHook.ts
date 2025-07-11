/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 5/17/2025
 * @Time 6:08 AM
 */
import {useState} from "react";

const Custom_Hooks = <T>(initialState: T[] = []) => {
    const [state, setState] = useState<T[]>(initialState);

    const add = (newValue: T) => {
        setState((currentState) => [...currentState, newValue]);
    };

    const remove = (index: number) => {
        setState((currentState) => {
            const newState = [...currentState];
            newState.splice(index, 1);
            return newState;
        });
    };

    return [state, { add, remove }] as const;
};

export default Custom_Hooks;
