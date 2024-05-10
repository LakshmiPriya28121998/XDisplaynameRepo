import {useState,useEffect} from 'react'

export default function Displayname() {

    const [input,setInput] = useState("");
    const [res,setRes] = useState(0);
    const[flag,setFlag] = useState(false)

    const handleclick = (event) => {
        setInput(input + event.target.id)
    }
    const handleClear =() => {
        setInput("");
        setFlag(false);
    }

    const handleequal =() => {
        if(input == ""){
            console.log("as")
            setRes("Error");
            setFlag(true);
        }
        else{
            setRes(eval(input));
            setFlag(true);
            console.log("asas")
        }
            
    }
 
    return (
        <div>
            <h1>React Calculator</h1>
            <div>
            <input type="text" value={input}></input>
    {flag && <div>{res}</div>}
            <div onClick={handleclick}>
            <button id="7">7</button>
            <button id="8">8</button>
            <button id="9">9</button>
            <button id="+">+</button>
            </div>
            <div onClick={handleclick}>
            <button id="4">4</button>
            <button id="5">5</button>
            <button id="6">6</button>
            <button id="-">-</button>
            </div>
            <div onClick={handleclick}>
            <button id="1">1</button>
            <button id="2">2</button>
            <button id="3">3</button>
            <button id="*">*</button>
            </div>
            <div >
            <button onClick={handleClear}>C</button>
            <button id="0" onClick={handleclick}>0</button>
            <button onClick={handleequal}>=</button>
            <button id="/" onClick={handleclick}>/</button>
            </div>
            </div>
        </div>
    )
}