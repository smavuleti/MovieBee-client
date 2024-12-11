import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  //const {book} = props;
  return (
    <div
      className="movie-list"
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.MovieTitle}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    MovieTitle: PropTypes.string,
    MovieDirector: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
