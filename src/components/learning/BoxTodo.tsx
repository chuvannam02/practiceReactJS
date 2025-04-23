type Todo = {
    id: number | null;
    title: string;
    status: boolean;
};

const BoxTodo = ({listTodos, handleRemoveTodo, handleUpdateTodo}: {
    listTodos: Todo[];
    handleRemoveTodo?: (updatedList: Todo[]) => void;
    handleUpdateTodo?: (updatedList: Todo[]) => void;
}) => {
    const handleDoneTodo = (id: number | null) => {
        if (!id) return;
        const newList = listTodos.map((item: Todo) =>
            item.id === id ? {...item, status: !item.status} : item
        );
        console.log("Updated (done):", newList);
        handleUpdateTodo?.(newList); // gọi hàm từ cha để cập nhật list
    };

    const handleDeleteTodo = (id: number | null) => {
        if (!id) return;
        const newList = listTodos.filter((item: Todo) => item.id !== id);
        console.log("Updated (deleted):", newList);
        handleRemoveTodo?.(newList); // optional callback from parent
    };

    return (
        <>
            {listTodos.map((item: Todo) => (
                <div
                    key={item.id}
                    className="mt-3 flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
          <span
              className={`flex-1 text-base font-medium ${
                  item.status ? "text-gray-900" : "line-through text-gray-400"
              }`}
          >
            {item.title}
          </span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleDoneTodo(item.id)}
                            className={`rounded-md px-3 py-1 text-sm font-semibold transition
                                ${item.status
                                ? "bg-green-100 text-green-800 hover:bg-green-200 line-through"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            }`}
                        >
                            {item.status ? "Done" : "Not Done"}
                        </button>
                        <button
                            onClick={() => handleDeleteTodo(item.id)}
                            className="rounded-md bg-red-100 px-3 py-1 text-sm font-semibold text-red-800 transition hover:bg-red-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BoxTodo;
