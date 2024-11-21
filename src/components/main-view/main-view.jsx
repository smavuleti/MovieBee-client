import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-card/movie-view.jsx";
 

export const MainView = () => {
    const url = "https://openlibrary.org/search.json?q=star+wars";
    const [movies, setMovies] = useState([]);

    //userEffect() hook with fetch()
    useEffect(()=> {
        fetch("mongodb+srv://smavuleti:crS94rDp6YWatEil@moviebeecluster.wyhju.mongodb.net/?retryWrites=true&w=majority&appName=movieBeeCluster")
        .then((response) => response.json())
        .then((data) => {
                    setMovies(data);

            });
    });

    const [selectedMovie, setSelectedMovie] = useState(null);


    if (selectedMovie) {
        return (
        <div>
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        <MovieView movie={selectedMovie} onBackClick={()=>setSelectedMovie(null)} />
        </div>
        )
    }

    if (movies.length === 0) {
        return <div> The list is empty! </div>;
    }
    return (
        <div>

            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelection) => {
                        setSelectedMovie(newSelection);
                    }}
                />
            ))}
        </div>
    );

};