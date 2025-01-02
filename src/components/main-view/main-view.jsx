import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-card/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation.bar/navigation-bar.jsx";
import { ProfileView } from "../profile-view/profile-view.jsx";
import axios from "axios";

export const MainView = () => {
//https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/allMovies
  const apiUrl = "https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/allMovies";
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser || null);
  const [token, setToken] = useState(storedToken || null);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // Handle user logout
  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  // Fetch all movies on token change
  useEffect(() => {
    if (!token) return;

    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [token]);

  const filterMovies = (e) => setFilter(e.target.value);

  const filteredMovies = movies.filter((movie) => {
    if (!movie || !filter) return true;
    const genreMatch = movie.MovieGenre?.GenreName?.toLowerCase().includes(filter.toLowerCase());
    const titleMatch = movie.MovieTitle?.toLowerCase().includes(filter.toLowerCase());
    return genreMatch || titleMatch;
  });


  const getSimilarMovies = (movieTitle) => {
    const currentMovie = movies.find((movie) => movie.MovieTitle === movieTitle);
    if (!currentMovie) return [];

    return movies.filter(
      (movie) =>
        movie.MovieGenre.GenreName === currentMovie.MovieGenre.GenreName &&
        movie.MovieTitle !== movieTitle
    );
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };


  const handleFavoriteToggle = (movieId) => {
    setFavoriteMovies((prevFavorites) => {
      const isFavorite = prevFavorites.some((movie) => movie._id === movieId);
      if (isFavorite) {
        return prevFavorites.filter((movie) => movie._id !== movieId);
      } else {
        const movieToAdd = movies.find((movie) => movie._id === movieId);
        return movieToAdd ? [...prevFavorites, movieToAdd] : prevFavorites;
      }
      
    });
    
  };
  

  return (
    <BrowserRouter>
      <NavigationBar user={user} onLoggedOut={onLoggedOut} />

      <Row className="justify-content-md-center g-4" style={{ paddingTop: "20px" }}>
        <Routes>
          <Route
            path="/signup"
            element={
              user ? <Navigate to="/" /> : <Col md={5}><SignupView /></Col>
            }
          />

          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <Col md={5}>
                  <LoginView onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                  }} />
                </Col>
              )
            }
          />

          <Route
            path="/allMovies/:selectedMovieTitle"
            element={
              !user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <Col>
                  <MovieView
                    movies={movies}
                    getSimilarMovies={getSimilarMovies}
                    user={user}
                    setUser={setUser}
                    token={token}
                  />
                </Col>
              )
            }
          />

          <Route
            path="/"
            element={
              !user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <>
                  <Form className="filter-form mb-4">
                    <Form.Group controlId="filter">
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Search"
                          value={filter}
                          onChange={filterMovies}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form>

                  <Row>
                    {filteredMovies.length > 0 ? (
                      filteredMovies.map((movie) => (
                        <Col key={movie._id} xs={12} sm={6} md={4} lg={3}>
                          <MovieCard
                            movie={movie}
                            isFavorite={favoriteMovies.some((fav) => fav._id === movie._id)}
                            onFavoriteToggle={() => handleFavoriteToggle(movie._id)}
                          />
                        </Col>
                      ))
                    ) : (
                      <Col>
                        <p>No movies match your search criteria.</p>
                      </Col>
                    )}
                  </Row>
                </>
              )
            }
          />

          <Route
            path="/users"
            element={
              !user ? (
                <Navigate to="/login" />
              ) : (
                <Col>
                <ProfileView
                  user={user}
                  movies={movies}
                  token={token}
                  updateUser={updateUser}
                  deregisterUser={onLoggedOut}
                />
              </Col>
              )
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
