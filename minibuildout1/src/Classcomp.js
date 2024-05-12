import {Component} from 'react'

class Classcomp extends Component {


    constructor(props) {
        super();
        this.state = {
            count : 0
        }
    }
    render() {
        return  <div>
        <h1>Counter App</h1>
<div>Count: {this.state.count}</div>
<button onClick={() => {
    this.setState((prev)=> {
        return {count : this.state.count + 1}
    })
}}>Increment</button>
<button onClick={() => {
    this.setState((prev)=> {
        return {count : this.state.count - 1}
    })
}}>Decrement</button>
    </div>
        
    }
}

export default Classcomp;