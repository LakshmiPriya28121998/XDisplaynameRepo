import logo from './logo.svg';
import './App.css';
import Displayname from "./Displayname.js"
import Counterapp from './Counterapp.js'
import Calculator from "./Calculator.js"
import Classcomp from "./Classcomp.js"
import XPagination from './XPagination.js'
import Home from './pages/Home/Home'
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    // <div className="App">
    //   {/* <Displayname /> */}
    //   {/* <Counterapp /> */}
    //   {/* <Calculator /> */}
    //   {/* <Classcomp /> */}
    //   {/* <XPagination /> */}
    // </div>
     <SnackbarProvider >
     <div>
       <Home />
     </div>
   </SnackbarProvider>
  );
}

export default App;
