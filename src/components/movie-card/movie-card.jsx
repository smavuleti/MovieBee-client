import PropTypes from "prop-types";
import { Card } from "react-bootstrap";


export const MovieCard = ({ movie, onMovieClick }) => {
  //const {book} = props;
  return (
    <Card style={{ width: "18rem" }} bg="dark" text="light">
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.MovieTitle}</Card.Title>
        <Card.Subtitle className="mb-2">{movie.MovieGenre}</Card.Subtitle>
        <Card.Link style={{ cursor: "pointer" }} onClick={() => onMovieClick(movie)}>View Details</Card.Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    MovieTitle: PropTypes.string,
    MovieDirector: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
