import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-card/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export const MainView = () => {
  const url = "https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/allMovies";
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  //useEffect() hook with fetch()
  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, [token]);

  return (
    <>
    <Row className="justify-content-md-end g-4" md={2} >
      {!user ? (
        <>
        <Col md={4}>
                <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
                <br></br>
                <SignupView />
                </Col>
        </>
  
      ) : selectedMovie ? (
        <Col md={5}>
        <MovieView 
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)} 
          />
          </Col>
        ) : movies.length === 0 ? (
          <div>The list is empty!</div>
        ) : (
          <>
            {movies.map((movie) => (
              <Col  lg={3} className="d-flex align-items-stretch" key={movie._id} >
              <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(newSelection) => {
                  setSelectedMovie(newSelection);
                }}
              />
              </Col>
            ))}
            <button
            className="myButton"
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      >
        {" "}
        Logout{" "}
      </button>
          </>
      )}
    </Row>
    </>
  )
};
