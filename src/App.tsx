// import {useState} from 'react'
// import Content from "./components/Content.tsx";
// import ClickIncrease from "./components/ClickIncrease.tsx";
// import HoverIncrease from "./components/HoverIncrease.tsx";
// import './App.css'

import Counter from "./components/Counter.tsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
          {/*// children = "Component"*/}
          {/*<Content count={count}>Component</Content>*/}
          {/*<h1>Count: {count}</h1>*/}
          {/*<button onClick={() => setCount(count + 1)} style={{cursor: 'pointer'}}>Click me</button>*/}
          {/*  <ClickIncrease />*/}
          {/*  <HoverIncrease />*/}
            <Counter />
        </>
    )
}

export default App
