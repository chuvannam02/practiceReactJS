// import {useState} from 'react'
// import Content from "./components/Content.tsx";
import ClickIncrease from "./components/ClickIncrease.tsx";
import HoverIncrease from "./components/HoverIncrease.tsx";
// import './App.css'

import Counter from "./components/Counter.tsx";
import VnptMap123 from "./components/VnptMap123.tsx";
import './App.css';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            {/*// children = "Component"*/}
            {/*<Content count={count}>Component</Content>*/}
            {/*<h1>Count: {count}</h1>*/}
            {/*<button onClick={() => setCount(count + 1)} style={{cursor: 'pointer'}}>Click me</button>*/}
              <ClickIncrease />
              <HoverIncrease />
              <Counter />
              <VnptMap123 />
            <div className={'wrapper'}>
                {/*<div className={'boxed'}></div>*/}
                <div className={'boxed2'}></div>
                <div className={'boxed2 chunam'} style={{background: 'blue'}}></div>
                <div className={'boxed2'} style={{background: 'red'}}></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa delectus expedita
                    facilis fugiat fugit illum impedit ipsa itaque magnam, maiores maxime, molestias nobis,
                    perferendis porro quia quod repellendus suscipit.
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate facilis harum voluptatem! Ab amet
                aspernatur autem deleniti modi nobis odio odit quam sed temporibus? Consequuntur numquam possimus
                quisquam rem vero.</p>
        </>
    )
}

export default App
