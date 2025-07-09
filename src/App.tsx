// import {useState} from 'react'
// import Content from "./components/Content.tsx";
import ClickIncrease from "./components/ClickIncrease.tsx";
import HoverIncrease from "./components/HoverIncrease.tsx";
// import './App.css'

import Counter from "./components/Counter.tsx";
// import VnptMap123 from "./components/VnptMap123.tsx";
// import './App.css';
import TodoInput from "./components/learning/FormDataTodo.tsx";
import {useState} from "react";
import SWPeopleQuery from "./components/ReactQuery/TanstackQuery.tsx";
import Button from "./components/learning/Pass_Props_To_Nested_Component/Button.tsx";
import Component1 from "./components/learning/React_Context_To_Avoid_Props_Drilling/Component1.tsx";
import "./app.scss";
import useCustomHook from "./components/learning/Custom_Hooks/useCustomHook.ts";
import UseReducer from "./components/learning/useReducer/UseReducer.tsx";
import DashboardButton from "./components/learning/DashboardButton.jsx";

type Todo = {
    id: number | null;
    title: string;
    status: boolean;
};


function App() {
    // const requestBody = {
    //     "status": "1",
    //     "name": "",
    //     "code": "",
    //     "loaiHinh_ids": [],
    //     "phanCap_ids": [],
    //     "linhVuc_ids": [],
    //     "page": 1,
    //     "size": 10
    // };
    //
    // useEffect(() =>  {
    //     axios.post('LOCALHOST_PLACEHOLDER/v1/unit/get-all', requestBody, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlU1FmcERNTnVLazVlUlRHMzlYNjdBV1Z2QjQtaC14YWVGd1F1SXNYRjBrIn0.eyJleHAiOjE3NDQ3MDQ1NDAsImlhdCI6MTc0NDcwNDMyNCwiYXV0aF90aW1lIjoxNzQ0Njk5NzQwLCJqdGkiOiI3YWUwODRjZi1iY2U5LTRjYjAtYWI2Ny01NDI2NDA4N2E3OTMiLCJpc3MiOiJodHRwczovL2xvZ2luLWxha2Vob3VzZS52bnB0LnZuL3JlYWxtcy9kYXRhLXBsYXRmb3JtIiwiYXVkIjpbInN1cGVyc2V0IiwiYWNjb3VudCJdLCJzdWIiOiIzMmFiMzk0Yy1lNTc0LTQ5MWMtOWYzOC02OTQ0MWUyOTlkZTgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJkYXRhLXBsYXRmb3JtIiwibm9uY2UiOiI0MjQyMGY0Yi0xYzg2LTQyMmYtODkyYi0zNTY5NTYxYWVhOGUiLCJzZXNzaW9uX3N0YXRlIjoiODYxNzkyYzgtYjdjYS00NTliLWJmNWEtMTQ2NWEwNmExODQ3IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJzdXBlci1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWRhdGEtcGxhdGZvcm0iLCJhZG1pbi1zdG9yYWdlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsic3VwZXJzZXQiOnsicm9sZXMiOlsiQWRtaW4iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI4NjE3OTJjOC1iN2NhLTQ1OWItYmY1YS0xNDY1YTA2YTE4NDciLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlZOUFRORVQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2bnB0bmV0IiwiZ2l2ZW5fbmFtZSI6IlZOUFRORVQiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoidm5wdG5ldEB2bnB0LnZuIn0.O2PqqkR2uVNYTeFb-8WtcZTB-eYGQY-_NAcELBHaUVKDFLPlRCadGfv1nVlz241BIIt5bUEfmf9mIcFUG-bGUS66-dyC96-RLRQxP9pNfQExsiml64YpefU-oBRo7DxSxui4D1ZhKNbWsvv46smJP4_dnVohxcnPs3I18QZDivgKAZx-_mkrE7QH8592BL_nu8RnfOQbINaijl0sL85voxoww7yTxYHN69TPWhu_uCIwPsWZg3DvGXuZkhFfhu37o2SsD7Ol8Y6H6RJIoPRdqPulyB24zvDVbMtjBfnL_7O-nTgHGtloj1b0OqTuQJ-NSaKECFboUoETtj1gO6uNsA'
    //         }
    //     })
    //         .then(response => {
    //         })
    //         .catch(error => {
    //             console.error('❌ Lỗi gọi API:', error);
    //         });
    // }, []);

    // useEffect(() => {
    //     fetch('https://lakehouse-gateway-poc.vnpt.vn/admin/v1/unit/get-all', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer [TOKEN_CỦA_BẠN]'
    //         },
    //         body: JSON.stringify(requestBody)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //         })
    //         .catch(error => {
    //             console.error('❌ Fetch error:', error);
    //         });
    // }, []);

    // const [formData, setFormData] = useState({title: ""});
    // const [listTodos, setListTodos] = useState<Todo[]>([]);
    //
    // const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormData({title: e.target.value});
    // };
    //
    // const handleSubmit = () => {
    //     if (!formData.title) return;
    //     const newTodo: Todo = {
    //         id: Date.now(),
    //         title: formData.title,
    //         status: false,
    //     };
    //     setListTodos((prev) => [...prev, newTodo]);
    //     setFormData({title: ""});
    // };
    //
    // const handleRemoveTodo = (newList: Todo[]) => {
    //     setListTodos(newList);
    // };

    const [formData, setFormData] = useState<Todo>({
        id: Date.now(),
        title: "",
        status: false,
    });
    const [listTodos, setListTodos] = useState<Todo[]>([]);

    const [todos, {add: addTodo, remove: removeTodo}] = useCustomHook<Todo>([]);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, title: e.target.value});
    };

    const handleSubmit = () => {
        if (!formData.title) return;
        const newTodo = {...formData, id: Date.now()};
        setListTodos([...listTodos, newTodo]);
        setFormData({...formData, title: ""});
    };

    console.warn('This will be kept');
    console.error('This will be kept');
    debugger; // This will be removed

    return (
        <>
            {/*// children = "Component"*/}
            {/*<Content count={count}>Component</Content>*/}
            {/*<h1>Count: {count}</h1>*/}
            {/*<button onClick={() => setCount(count + 1)} style={{cursor: 'pointer'}}>Click me</button>*/}
            <ClickIncrease/>
            <HoverIncrease/>
            <Counter/>
            <div className={"wrapper"}>
                {/*<div className={'boxed'}></div>*/}
                <div className={"boxed2"}></div>
                <div className={"boxed2 chunam"} style={{background: "blue"}}></div>
                <div className={"boxed2"} style={{background: "red"}}></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
                    culpa delectus expedita facilis fugiat fugit illum impedit ipsa itaque
                    magnam, maiores maxime, molestias nobis, perferendis porro quia quod
                    repellendus suscipit.
                </p>
            </div>

            <div className="dropdown">
                <div className="dropdown-select">
                    <span>Figma</span>
                    <ion-icon name="caret-down-outline"></ion-icon>
                </div>
                <div className="dropdown-list">
                    <div className="dropdown-item">Figma</div>
                    <div className="dropdown-item">Adobe XD</div>
                    <div className="dropdown-item">Photoshop</div>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                facilis harum voluptatem! Ab amet aspernatur autem deleniti modi nobis
                odio odit quam sed temporibus? Consequuntur numquam possimus quisquam
                rem vero.
            </p>
            <br/>
            <div className="container">
                <a href="#" className="link">
                    Evondev
                </a>
            </div>

            {/*<button className="btn">*/}
            {/*    Frontend Dev*/}
            {/*</button>*/}

            {/*<div className="btn2">*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    Evondev*/}
            {/*</div>*/}
            {/*<br/>*/}
            {/*<div className="button3">*/}
            {/*    Chu Nam*/}
            {/*</div>*/}
            {/*<br/>*/}
            {/*<div className="resize">*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    Resize*/}
            {/*</div>*/}

            {/*<br/>*/}
            {/*<div className="button button--bestia">*/}
            {/*    <div className="button_bg">*/}

            {/*    </div>*/}
            {/*    <span>*/}
            {/*        Locate*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div className="typewriter">*/}
            {/*    <h1>The cat and the hat.</h1>*/}
            {/*</div>*/}

            {/*<CountClick/>*/}
            {/*<div className="min-h-screen bg-gray-50 py-10">*/}
            {/*    <TodoInput*/}
            {/*        formData={formData}*/}
            {/*        handleChangeTitle={handleChangeTitle}*/}
            {/*        handleSubmit={handleSubmit}*/}
            {/*        listTodos={listTodos}*/}
            {/*        handleRemoveTodo={handleRemoveTodo}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<hr/>*/}
            {/*<SWPeopleQuery/>*/}

            {/*        div>{value}</div>	Nhúng giá trị value*/}
            {/*<div>{1 + 2}</div>	Hiển thị kết quả của biểu thức 1 + 2*/}
            {/*<Button config={{ size: "lg" }}>	Truyền object { size: "lg" } vào prop config*/}
            {/*<div style={{ color: "red" }}/>	Truyền object style { color: "red" }    */}
            {/* {} trong JSX để mở 1 JSX expression - Để nhúng biểu bức Javascript vào JSX*/}
            {/*Cặp {} bên trong - object literal - theo đó bạn truyền 1 object đi*/}
            {/*<Button textProps={{*/}
            {/*    className: "text-red-500",*/}
            {/*    style: {fontSize: "20px"},*/}
            {/*}}>Click Me!</Button>*/}

            {/*Nhúng JS vào JSX	{ expression }*/}
            {/*Truyền object literal vào prop	{{ key: value }}*/}

            {/*<div style={{padding: 20}}>*/}
            {/*    <h1>🧪 React Context Demo</h1>*/}
            {/*    <Component1/>*/}
            {/*</div>*/}

            {/*<div className="test">*/}
            {/*    <div className="children">*/}

            {/*    </div>*/}
            {/*</div>*/}

            <div className="todos">
                <h1>Todo List</h1>
                <TodoInput
                    formData={formData}
                    handleChangeTitle={handleChangeTitle}
                    handleSubmit={handleSubmit}
                    listTodos={listTodos}
                    handleRemoveTodo={setListTodos}
                />
                <ul>
                    {listTodos.map((todo, index) => (
                        <li key={todo.id}>
                            {todo.title}
                            <button
                                onClick={() => {
                                    const newList = [...listTodos];
                                    newList.splice(index, 1);
                                    setListTodos(newList);
                                }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>

                <h1>Custom Hook Todo List</h1>
                <button
                    onClick={() =>
                        addTodo({id: Date.now(), title: "New Todo", status: false})
                    }
                >
                    Add Todo
                </button>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={() => removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <UseReducer/>
            <div className="box"></div>

            <div className="circle-wrapper">
                <div className="circle-foreground">N</div>
            </div>

            <div className="chuvannam">
                <DashboardButton/>
            </div>
        </>
    );
}

export default App;
