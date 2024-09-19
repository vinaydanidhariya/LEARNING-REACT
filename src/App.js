import "./Style.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navigation";
import RoutesNav from "./Routes";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <RoutesNav />
      </Router>
    </>
  );
}

export default App;
