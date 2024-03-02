import "./Style.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Result from "./Result";
import Counter from "./Counter";
import Sum from "./Sum";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import Project from "./Components/Project";
import Hooksum from "./Hooksum";
import MapDemo from "./MapDemo";
import News from "./Components/News";
function App() {

  return (
    <>
      <Router>
        <h1>React Router</h1>      
        <Link to="/home">Home |</Link>
        <Link to="/about"> About |</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/project">| Project </Link>
        <Link to="/hooksum">| HookSum </Link>
        <Link to="/mapdemo">| MapDemo </Link>
        <Link to="/news">| News </Link>
        <Link to="/result">| Result </Link>
        <Link to="/counter">| Counter </Link>
        <Link to="/sumdemo">| sumdemo </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/hooksum" element={<Hooksum/>} />
          <Route path="/mapdemo" element={<MapDemo/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/sumdemo" element={<Sum/>} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
