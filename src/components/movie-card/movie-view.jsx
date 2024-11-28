import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div class="movie-view">
      <div class="movie-card">
        <img src={movie.ImagePath} width={200} height={300} />
      </div>
      <div class="movie-card">
        <span> Title: </span>
        <span> {movie.MovieTitle}</span>
      </div>
      <div class="movie-card">
        <span> Genre: </span>
        <span> {movie.MovieGenre}</span>
      </div>
      <div class="movie-card">
        <span> Director: </span>
        <span> {movie.MovieDirector}</span>
      </div>
      <div class="movie-card">
        <span> Description: </span>
        <span> {movie.MovieDescription}</span>
      </div>
      <button class="back-button" onClick={onBackClick}>
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
