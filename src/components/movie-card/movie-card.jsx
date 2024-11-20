import PropTypes from "prop-types";


export const MovieCard = ({ movie, onMovieClick }) => {
    //const {book} = props;
    return <div class="movie-list"
        onClick={() => {
            onMovieClick(movie);
        }}
    >
        {movie.title}</div>;

};

MovieCard.PropTypes = {
    movie:PropTypes.shape({
        title: PropTypes.string,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};