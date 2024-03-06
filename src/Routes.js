import React from "react";
import { Route } from "react-router-dom";

import Project from "./Components/Project";
import Hooksum from "./Hooksum";
import MapDemo from "./MapDemo";
import News from "./Components/News";
import Product from "./Components/Product";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Result from "./Result";
import Counter from "./Counter";
import Sum from "./Sum";
import NoPage from "./NoPage";
import { Routes } from "react-router-dom";
import MovieTable from "./Components/MovieTable";

const RoutesNav = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LEARNING-REACT/" element={<Home />} />
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
    <Route path="/movies" element={<MovieTable />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
);

export default RoutesNav;
