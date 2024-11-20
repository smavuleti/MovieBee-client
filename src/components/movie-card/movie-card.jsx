export const MovieCard = ({ movie, onMovieClick }) => {
    //const {book} = props;
    return <div class="movie-list"
        onClick={() => {
            onMovieClick(movie);
        }}
    >
        {movie.title}</div>;

};