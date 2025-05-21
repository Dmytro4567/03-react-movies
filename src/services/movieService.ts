import axios, {type AxiosResponse} from 'axios';
import type {Movie} from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

interface FetchMoviesResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const token = import.meta.env.VITE_TMDB_TOKEN;

    const response: AxiosResponse<FetchMoviesResponse> = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            query,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response);

    return response.data.results;
};