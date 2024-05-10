import {useState,useEffect} from 'react'




export default function Displayname() {

    const [fname,setFname] = useState("");
const[lname,setLname] = useState("");
const [flag,setFlag] = useState(false)
const [name,setName] = useState("")

const handlefname = (event) => {
    setFname(event.target.value)
}

const handlelname = (event) => {
    setLname(event.target.value)
}

const handlesubmit = (event) => {
    event.preventDefault();
    if(lname && fname){
        setFlag(true);
    }
    let fullname = fname+" "+lname;
    setName(fullname)
}

    return (
        <div>
           
            <form>
            <h1>Full Name Display</h1>
            <div>
          <label for="firstname" >First Name:</label>

          <input
            type="text"
            name="firstname"
            id="firstname"
            class="form-control"
            value={fname}
            onChange={handlefname}
          />
        </div>
        <div>
          <label for="lastname" >Last Name:</label>

          <input
            type="text"
            name="lastname"
            id="lastname"
            class="form-control"
            value={lname}
            onChange={handlelname}
          />
        </div>
        <button  type="submit" onClick={handlesubmit}>
          Submit
        </button>
    {flag && <div>Full Name : {name}</div>}
            </form>
        </div>
    )
}