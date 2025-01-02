import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export const MovieCard = ({ movie, showRemoveButton, onFavoriteToggle }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      bg="dark"
      text="light"
      className="mb-3 shadow-sm"
    >
      {/* Card Image */}
      <Card.Img
        variant="top"
        src={movie.ImagePath}
        alt={movie.MovieTitle}
        style={{ objectFit: "cover" }}
      />

      {/* Card Header */}
      <Card.Header className="font-weight-bold">{movie.MovieTitle}</Card.Header>

      {/* Card Body */}
      
      <Card.Body>
      <Col>
        <Link
          to={`/allMovies/${encodeURIComponent(movie.MovieTitle)}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="outline-light" className="w-100">
            View Details
          </Button>
        </Link>
        </Col>
        {showRemoveButton && (
          <Col className="d-flex justify-content-center">
            <Button
              variant="secondary"
              size="sm"
              className="secondary-button w-100"
              onClick={() => onFavoriteToggle(movie.id)}
            >
              Remove from Favorites
            </Button>
          </Col>
        )}
      </Card.Body>
    </Card>
  );
};

// PropTypes for validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    MovieTitle: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  showRemoveButton: PropTypes.bool,
  onFavoriteToggle: PropTypes.func,
};
