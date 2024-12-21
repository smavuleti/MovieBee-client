import PropTypes from "prop-types";
import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movie-view">
    <img src={movie.ImagePath} width={200} height={300} />
    <div className="movie-card">
      <span> Title: </span>
      <span> {movie.MovieTitle}</span>
    </div>
    <div className="movie-card">
      <span> Genre: </span>
      <span> {movie.MovieGenre}</span>
    </div>
    <div className="movie-card">
      <span> Director: </span>
      <span> {movie.MovieDirector}</span>
    </div>
    <div className="movie-card">
      <span> Description: </span>
      <span> {movie.MovieDescription}</span>
    </div>
    <button
      className="back-button"
      onClick={onBackClick}
      style={{ cursor: "pointer" }}
    >
      Back{" "}
    </button>
  </div>
);
};

MovieView.propTypes = {
movie: PropTypes.shape({
  movieTitle: PropTypes.string,
}).isRequired,
onBackClick: PropTypes.func.isRequired,
};
