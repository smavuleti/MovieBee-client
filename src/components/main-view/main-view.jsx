import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-card/movie-view.jsx";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "The Godfather",
            image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg", 
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            genre: "Drama",
            director: "Francis Ford Coppola"
        },  
        {
            id: 2,
            title: "The Dark Knight",
            image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
            description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness." ,
            genre: "Action",
            director: "Christopher Nolan"
        },  
        {
            id: 3,
            title: "Forest Grump",
            image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart." ,
            genre: "Romance",
            director: "Robert Zemeckis"
        },  
        {
            id: 4,
            title: "Jaws",
            image: "https://m.media-amazon.com/images/I/616z7DnWGmL._AC_UF894,1000_QL80_.jpg",
            description: "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down." ,
            genre: "Adventure",
            director: "Steven Spielberg"
        },  
        {
            id: 5,
            title: "Jurassic Park",
            image: "https://i.ebayimg.com/00/s/MTYwMFgxMTA2/z/-ggAAOSwACNgsOd~/$_57.JPG?set_id=8800005007",
            description: "An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyone's lives, including his grandchildren's, in danger." ,
            genre: "Adventure",
            director: "Steven Spielberg"
        },  
        {
            id: 6,
            title: "The Conjuring",
            image: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse." ,
            genre: "Horror",
            director: "James Wan"
        },  
        {
            id: 7,
            title: "Home Alone",
            image: "https://m.media-amazon.com/images/M/MV5BNzNmNmQ2ZDEtMTc1MS00NjNiLThlMGUtZmQxNTg1Nzg5NWMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            description: "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas Eve." ,
            genre: "Comedy",
            director: "Chris Columbus"
        },  
        {
            id: 8,
            title: "Avatar",
            image: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
            description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home." ,
            genre: "Fantasy",
            director: "James Cameron"
        },  
        {
            id: 9,
            title: "It",
            image: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
            description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town." ,
            genre: "Horror",
            director: "Andi Muschietti"
        },  
        {
            id: 10,
            title: "The Avengers",
            image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
            description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity." ,
            genre: "Action",
            director: "Joss Whedon"
        }
    ]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
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
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );

};