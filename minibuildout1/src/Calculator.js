import {useState,useEffect} from 'react'

export default function Displayname() {

    const [input,setInput] = useState("")


 
    return (
        <div>
            <h1>React Calculator</h1>
            <input type="text" value={input}></input>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>+</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>C</button>
            <button>0</button>
            <button>=</button>
            <button>/</button>
        </div>
    )
}