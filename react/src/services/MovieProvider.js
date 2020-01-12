import axios from 'axios';

/**
 * API key for passing auth
 */
export const API_KEY = 'a66cbd8c4ff4613f11d8365e9a97788c';

/**
 * MovieDb API string
 */
export const API_BASE_URL = 'https://api.themoviedb.org/3';

export const API_BASE_URL_FOR_IMAGES = "https://image.tmdb.org/t/p/w185/";
/**
 * Object with available API methods in fkng-frnt app to sending to MovieDb API
 */
export const AVAILABLE_API_METHODS = {
    getPopular: '/movie/popular',
    getDetails: '/movie',
    getMostPopular: '/discover/movie?with_genres=18&primary_release_year=2017'
};

/**
 * Movie provider for getting data for using it in app
 */
export class MovieProvider {
    /**
     * Method for getting popular movies
     */
    getPopularMovies() {
        const requestSettings = {
            method: 'GET',
            baseURL: API_BASE_URL,
            url: AVAILABLE_API_METHODS.getMostPopular,
            params: {
                api_key: API_KEY
            }
        };

        return axios(requestSettings);
    }

    /**
     * Method for getting movie details
     * @param movieId requesting movie id
     */
    getMovieDetails(movieId) {
        if (!movieId) {
            return Promise.reject();
        }

        const requestSettings = {
            method: 'GET',
            baseURL: API_BASE_URL,
            url: AVAILABLE_API_METHODS.getDetails + `/${movieId}`,
            params: {
                api_key: API_KEY
            }
        };

        return axios(requestSettings);
    }
}