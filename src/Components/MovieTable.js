import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const MovieTable = ({ movies }) => {
  const keys = ["Actors", "Title", "Year", "Production"];

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", margin: "20px auto auto" }}>
        Popular Movies for {new Date().toLocaleDateString()}
      </h2>

      <Table
        variant="default"
        style={{ width: "100%", margin: "20px auto" }}
        striped
        bordered
        responsive
      >
        <thead>
          <tr>
            {keys.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Actors}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Production}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState("");
  const [errBool, setErrBool] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = (url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setErr("");
        } else {
          setMovies([]);
          setErr(data.Error);
        }
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=95a7b651`;
    fetchMovies(url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {errBool && <p>Error: {err}</p>}
      {movies.length > 0 && <MovieTable movies={movies} />}
    </div>
  );
};

export default MovieSearch;
