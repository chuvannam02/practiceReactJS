import BoxTodo from "./BoxTodo";
import {useEffect, useState} from "react";

type Todo = {
    id: number | null;
    title: string;
    status: boolean;
};

const TodoInput = ({ formData, handleChangeTitle, handleSubmit, listTodos, handleRemoveTodo }) => {
    const [todos, setTodos] = useState<Todo[]>(listTodos || []);

    // Đồng bộ khi props listTodos thay đổi
    useEffect(() => {
        setTodos(listTodos);
    }, [listTodos]);

    const handleUpdateTodo = (updatedList: Todo[]) => {
        setTodos(updatedList);
    };

    return (
        <div className="mx-auto mt-8 w-full max-w-md rounded-lg bg-gray-100 p-6 shadow-md">
            <div className="flex gap-3">
                <input
                    type="text"
                    value={formData.title}
                    onChange={handleChangeTitle}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                    placeholder="Enter your todo..."
                    className="border pl-2 bg-white"
                />

                <button
                    onClick={handleSubmit}
                    disabled={!formData.title}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                        formData.title
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                    Add Todo
                </button>
            </div>

            <div className="mt-5">
                <BoxTodo
                    listTodos={todos}
                    handleRemoveTodo={handleRemoveTodo}
                    handleUpdateTodo={handleUpdateTodo}
                />
            </div>
        </div>
    );
};

export default TodoInput;
