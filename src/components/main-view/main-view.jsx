import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-card/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";

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

  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        <br></br>
        <SignupView />
      </>
    );
  }

  if (selectedMovie) {
    return (
      <div>
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
      </div>
    );
  }

  if (movies.length === 0) {
    return <div> The list is empty! </div>;
  }

  return (
    <>
      <div>
        <h3>Movies List:</h3>
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onMovieClick={(newSelection) => {
              setSelectedMovie(newSelection);
            }}
          />
        ))}
      </div>

      <button
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
  );
};
