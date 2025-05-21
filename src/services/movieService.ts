import axios, {type AxiosResponse} from 'axios';
import type {Movie} from '../types/movie';

interface FetchMoviesResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}

const BASE_URL = 'https://api.themoviedb.org/3';
const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response: AxiosResponse<FetchMoviesResponse> = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            query,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.results;
};