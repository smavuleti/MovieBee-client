import PropTypes from "prop-types";
import { Card } from "react-bootstrap";


export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card style={{ width: "18rem" }} bg="dark" text="light">
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.MovieTitle}</Card.Title>
        <Card.Link style={{ cursor: "pointer" }} onClick={() => onMovieClick(movie)}>View Details</Card.Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    MovieTitle: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
