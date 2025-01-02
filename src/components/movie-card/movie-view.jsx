//import PropTypes from "prop-types";
import "./movie-view.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import { MovieCard } from "./movie-card";


export const MovieView = ({
  movies,
  getSimilarMovies,
  user,
  token,
  setUser,
}) => {
  // Extract selectedMovieTitle from useParams
  const { selectedMovieTitle } = useParams();
  // Find the movie by title
  const movie = movies.find((m) => m.MovieTitle === selectedMovieTitle);
  const similarMovies = getSimilarMovies(selectedMovieTitle);
 
  // State to store user's favorite movies
  const [userFavoriteMovies, setUserFavoriteMovies] = useState(
    user?.UserFavoriteMovies || []
  );
  useEffect(() => {
  }, [user, userFavoriteMovies]);

  const movieId = movie._id.toString();
  const favoriteIds = userFavoriteMovies.map((id) => id.toString());
  const isFavorite = favoriteIds.includes(movieId);

 
    //https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/allMovies
  // Function to add movie to favorites
  const addToFavorites = (username, movieId) => {
    axios
      .post(
        `https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/users/${user.Username}/favorites`,
        { _id: movieId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setUser(response.data); // Update user state with the updated data
        localStorage.setItem("user", JSON.stringify(response.data));
        setUserFavoriteMovies(response.data.UserFavoriteMovies); // Update the favorites list
      })
      .catch((error) => {
        console.error("Error adding movie to favorites", error);
      });
  };

// Function to remove a movie from the user's favorites by movie ID
  const removeFromFavorites = (username, movieId) => {
    //console.log(`Making request to remove movie ${movieId} from favorites for user ${username}`);

    axios
      .delete(
        `https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/users/${user.Username}/favorites`,
        
        {
          headers: { Authorization: `Bearer ${token}` },
          data:{ _id: movieId },
          
        }
      )
      .then((response) => {
       // console.log("Remove from favorites response data:", JSON.stringify(response.data));

        setUser(response.data); // Update user state with the updated favorites list
        localStorage.setItem("user", JSON.stringify(response.data));
            setUserFavoriteMovies(response.data.UserFavoriteMovies); // Update the favorites list

      })
      .catch((error) => {
        console.error("Error removing movie from favorites", error);
      });

  };

  if (!movie) {
    return <div>Movie not found</div>;
  }
  
  return (
    <Container className="movie-container ">
      <Row>
        <div className="movie-view-title">
          <span> {movie.MovieTitle}</span>
        </div>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <img src={movie.ImagePath} width={350} height={500} />
        </Col>


        <Col lg={8} >
          <div className="movie-details-column">
            <span><b> Movie Genre:</b> </span>
            <span>{movie.MovieGenre.GenreName} </span>
            <br></br><hr></hr>
          </div>
          <div className="movie-details-column">
            <span><b>Movie Director:</b> </span>
            <span> {movie.MovieDirector.DirectorName}</span>
            <br></br><hr></hr>
          </div>

          <div className="movie-details-column">
            <span> <b>Release Year:</b> </span>
            <span>{movie.MovieReleaseYear} </span>
            <br></br><hr></hr>
          </div>

          <div className="movie-details-column">
            <span> <b>Storyline:</b> </span>
            <span> {movie.MovieDescription} </span>
            <br></br><hr></hr>
          </div>

          
  {/* Show "Add to Favorites" button only when the movie is NOT in the favorites list */}
    {!isFavorite && (
              <Button
                className="primary-button"
                variant="warning"
                onClick={() => addToFavorites(user.Username, movieId)}
                style={{ cursor: "pointer", marginLeft: "25px" }}
              >
                Add to Favorites
              </Button>
            )}


   {isFavorite && (
             <Button
              variant="primary" 
              className="primary-button"
               onClick={() => removeFromFavorites(user.Username,movieId)}
               style={{ cursor: "pointer", marginLeft: "25px" }}
             >
               Remove from Favorites
             </Button>
           )}


          <Link to={`/`}>
        <Button variant="secondary" className="primary-button" style={{ cursor: "pointer" , marginLeft: "40px" }}>
        Back
        </Button>
        </Link>


      <br></br> 

        </Col>
      </Row>



      <Row style={{ padding: "20px" }}>
        <h3>More Like this</h3>
        {similarMovies.length > 0 ? (
          <Row>
            {similarMovies.map((similarMovie, index) => (
              <Col
                key={similarMovie._id || similarMovie.MovieTitle || index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <MovieCard movie={similarMovie} />
              </Col>
            ))}
          </Row>
        ) : (
          <p> No similar movies found.</p>
        )}
      </Row>
    </Container>
  );
};
