import "./Style.css";
import Home from "./Home";
import MyButton from "./Button";
import Car from './classCompo'
import Result from './Result'
import Counter from './Counter'
import Sum from "./Sum";
function App() {
  var a = 10;
  var b = 10;

  return (
    <>
      {/* <Home />
      <h1>JAY SHREE RAM</h1>
      <h1 style={{backgroundColor:"blue"}}>A value is {a}</h1>
      <h1 className="myClass">A value is {a}</h1>
      <h1>sum of two {a+b}</h1>
      <MyButton/>
      <Car/>
      <Counter/>
      <br></br>
      <Sum/> */}
      <Result/>
    </>
  );
}

export default App;
