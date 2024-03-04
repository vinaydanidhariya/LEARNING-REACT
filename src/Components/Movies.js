import React, { useState, useEffect } from "react";
const [movies, setMovies] = useState([]);
const [err, setErr] = useState("");
const [errBool, setErrBool] = useState(false);
const [loading, setLoading] = useState(true);
let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${YOUR_API_KEY}&language=en-US&page=1`;

const fetchMovies = (url) => {
  fetch(url)
    .then((response) => {
      setMovies(response.data.results);
      setLoading(false);
    })
    .catch((err) => {
      setErr(err.message);
      setErrBool(true);
      setLoading(false);
    });
};

useEffect(() => {
  fetchMovies(URL);
}, [URL]);
