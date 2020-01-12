import React from 'react';
import { MovieProvider } from '../services/MovieProvider';
import { MovieCardComponent } from './MovieCardComponent';


export class PopularMoviesComponent extends React.Component {
    movieProvider;

    constructor(props) {
        super(props);
        this.state = {};
        this.movieProvider = new MovieProvider();
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.movieProvider.getPopularMovies()
            .then(response => {
                const { results } = response.data;
                const movieComponents = [];

                for (let i = 0; i < results.length; i++) {
                    const movieComponent = new MovieCardComponent({ movie: results[i] });
                    movieComponents.push(movieComponent);
                }

                this.setState({ movies: results, movieCardComponents: movieComponents });
            })
            .catch(error => console.log(error));
    }

    render() {
        if (!this.state.movies
            || !this.state.movieCardComponents
            || !this.state.movieCardComponents.length) {
            return <div className="loading">Loading....</div>;
        }

        return <div className="movie-list">
            {this.state.movieCardComponents
                && this.state.movieCardComponents.map((x, i) => this.state.movies
                    && <MovieCardComponent key={i} movie={this.state.movies[i]} />)}
        </div>;
    }
}