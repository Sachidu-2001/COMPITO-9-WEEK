import { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

const NetFilms = () => {
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);  

  useEffect(() => {
    const fetchMovie1 = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=a69bf1d9&s=South%20Park"
        );
        const data = await response.json();
        setMovies1(data.Search ? data.Search.slice(0, 6) : []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchMovie2 = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=a69bf1d9&s=alien"
        );
        const data = await response.json();
        setMovies2(data.Search ? data.Search.slice(0, 6) : []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchMovie3 = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=a69bf1d9&s=x-men"
        );
        const data = await response.json();
        setMovies3(data.Search ? data.Search.slice(0, 6) : []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovie1();
    fetchMovie2();
    fetchMovie3();

  });


  return (
    <div className="py-2 px-3 bg-black">
      <div className="mb-3">
        <h3 className="text-white">Trending Now</h3>
        <Row className="g-1">
          {movies1.map((movie) => (
            <Col
              key={movie.imdbID}
              xs={6}
              md={4}
              lg={2}
              className="text-center"
            >
              <div className="card-container">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "default-image.jpg"}alt={movie.Title} style={{height:'150px',width:'250px'}} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mb-3">
        <h3 className="text-white">Watch It Again</h3>
        <Row className="g-1">
          {movies2.map((movie) => (
            <Col
              key={movie.imdbID}
              xs={6}
              md={4}
              lg={2}
              className="text-center"
            >
              <div className="card-container">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "default-image.jpg"}alt={movie.Title} style={{height:'150px',width:'250px'}} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <h3 className="text-white">New Release</h3>
        <Row className="g-1">
          {movies3.map((movie) => (
            <Col
              key={movie.imdbID}
              xs={6}
              md={4}
              lg={2}
              className="text-center"
            >
              <div className="card-container">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "default-image.jpg"}alt={movie.Title} style={{height:'150px',width:'250px'}} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      
    </div>
  );
};

export default NetFilms;
