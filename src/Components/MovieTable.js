import React, { useState, useEffect } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [err, setErr] = useState("");
  const [errBool, setErrBool] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies("https://www.omdbapi.com/?s=war&apikey=4a249f8d");
  }, []);
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
    <>
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
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", margin: "20px auto auto" }}>
          List of Movies
        </h2>

        <Container>
          <div className="row">
            {movies.map((movie) => (
              <>
                <div className="col-md-4">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>IMBD ID {movie.imdbID}</Card.Text>
                      <Card.Text>Released In {movie.Year}</Card.Text>
                      <Button variant="primary">More</Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
export default MovieTable;
