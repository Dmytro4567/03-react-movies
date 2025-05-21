import MovieList from '../MovieList/MovieList';
import SearchBar from "../SearchBar/SearchBar.tsx";
import css from './App.module.css';
import {useState} from "react";
import type {Movie} from "../../types/movie.ts";
import toast, {Toaster} from 'react-hot-toast';
import {fetchMovies} from "../../services/movieService.ts";

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (query: string) => {
        if (!query.trim()) {
            toast.error('Please enter your search query.');
            return;
        }

        setMovies([]);
        setError(false);
        setLoading(true);

        try {
            const fetchedMovies = await fetchMovies(query);
            if (fetchedMovies.length === 0) {
                toast.error('No movies found for your request.');
            }
            setMovies(fetchedMovies);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={css.app}>
            <SearchBar onSubmit={handleSearch}/>
            <MovieList/>
        </div>
    )
}

export default App
