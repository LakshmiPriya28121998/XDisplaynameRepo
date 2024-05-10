import {useState,useEffect} from 'react'

export default function Displayname() {

    const [count,setCount] = useState(0);

    const handleinc = () => {
        setCount(count+1);
    }
    const handledec = () => {
        setCount(count-1);
    }
    return (
        <div>
            <h1>Counter App</h1>
    <div>Count: {count}</div>
    <button onClick={handleinc}>Increment</button>
    <button onClick={handledec}>Decrement</button>
        </div>
    )
}