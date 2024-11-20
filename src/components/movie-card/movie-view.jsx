export const MovieView = ({movie, onBackClick}) => {
    return (
        <div class="movie-view">
            <div class="movie-card">
                <img src={movie.image} width= {200} height ={300}/>
            </div>
            <div class="movie-card">
                <span> Title: </span>
                <span> {movie.title}</span>
            </div>
            <div class="movie-card">
                <span> Genre: </span>
                <span> {movie.genre}</span>
            </div>
            <div class="movie-card">
                <span> Director: </span>
                <span> {movie.director}</span>
            </div>
            <div class="movie-card">
                <span> Description: </span>
                <span> {movie.description}</span>
            </div>
            <button class="back-button" onClick={onBackClick} >Back </button>
        </div>
    );
};