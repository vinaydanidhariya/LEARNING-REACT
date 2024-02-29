import "./Style.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";


// import MyButton from "./Button";
// import Car from "./classCompo";
// import Result from "./Result";
// import Counter from "./Counter";
// import Sum from "./Sum";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import Project from "./Components/Project";
function App() {
  var a = 10;
  var b = 10;

  return (
    <>
      <Router>
        <h1>React Router</h1>      
        <Link to="/home">Home |</Link>
        <Link to="/about"> About |</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/project">| Project </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </Router>


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
      {/* <Result/> */}

    </>
  );
}

export default App;
