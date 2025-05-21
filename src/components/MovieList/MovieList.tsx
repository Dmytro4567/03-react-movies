import {useEffect, useState} from 'react';
import {fetchMovies} from '../../services/movieService.ts';
import type {Movie} from '../../types/movie.ts';

function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetchMovies('batman').then(setMovies);
    }, []);

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </li>
            ))}
        </ul>
    );
}

export default MovieList;