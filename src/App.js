import "./Style.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Result from "./Result";
import Counter from "./Counter";
import Sum from "./Sum";
import NoPage from "./NoPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Project from "./Components/Project";
import Hooksum from "./Hooksum";
import MapDemo from "./MapDemo";
import News from "./Components/News";
import Product from "./Components/Product";
import Navigation from "./Components/Navigation";
import { Container } from "react-bootstrap";
import MovieTable from "./Components/MovieTable";
import MovieAccordion from "./Components/MovieAccordion";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState("");
  const [errBool, setErrBool] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState([]);

  // https://www.omdbapi.com/?i=tt3896198&apikey=95a7b651
  let URL = `https://www.omdbapi.com/?s=${search}&page=2&apikey=95a7b651`;

  const fetchMovies = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setErrBool(true);
        setLoading(false);
      });
  };
 const handleSearch = (e) => {
   let search = e.target.value;
   setSearch(search);
 };

  useEffect(() => {
    fetchMovies(URL);
  }, [URL]);

  // {
  //     "Title": "Guardians of the Galaxy Vol. 2",
  //     "Year": "2017",
  //     "Rated": "PG-13",
  //     "Released": "05 May 2017",
  //     "Runtime": "136 min",
  //     "Genre": "Action, Adventure, Comedy",
  //     "Director": "James Gunn",
  //     "Writer": "James Gunn, Dan Abnett, Andy Lanning",
  //     "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
  //     "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
  //     "Language": "English",
  //     "Country": "United States",
  //     "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  //     "Ratings": [
  //         {
  //             "Source": "Internet Movie Database",
  //             "Value": "7.6/10"
  //         },
  //         {
  //             "Source": "Rotten Tomatoes",
  //             "Value": "85%"
  //         },
  //         {
  //             "Source": "Metacritic",
  //             "Value": "67/100"
  //         }
  //     ],
  //     "Metascore": "67",
  //     "imdbRating": "7.6",
  //     "imdbVotes": "753,481",
  //     "imdbID": "tt3896198",
  //     "Type": "movie",
  //     "DVD": "10 Jul 2017",
  //     "BoxOffice": "$389,813,101",
  //     "Production": "N/A",
  //     "Website": "N/A",
  //     "Response": "True"
  // }

  return (
    <>
      <Container>
        <Navigation />
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          style={{ width: "100%" }}
        />

        <MovieTable movies={movies} />

        {/* <MovieAccordion movies={movies} /> */}
      </Container>
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
        <Link to="/product">| Product </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/hooksum" element={<Hooksum />} />
          <Route path="/mapdemo" element={<MapDemo />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/result" element={<Result />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/sumdemo" element={<Sum />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
