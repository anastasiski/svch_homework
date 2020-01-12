import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL_FOR_IMAGES } from '../services/MovieProvider';

export class MovieCardComponent extends React.Component {
    render() {
        const { movie = {} } = this.props;

        return <div className="movie-card">
        
        <Link to={`/movie/${movie.id}`}><img className="movie-card__image" src={API_BASE_URL_FOR_IMAGES+movie.poster_path} alt={movie.original_title}/> {console.log(movie)}</Link>
        <div className="movie-card__description">
            <h2 className="movie-card__title"> 
                <Link className='movie-card__title' to={`/movie/${movie.id}`}>{movie.original_title}</Link>
            </h2>
            <span className="movie-card__release-date">{movie.release_date}</span>
            <p className="movie-card__text">{movie.overview && movie.overview.length > 50 ? movie.overview.substring(0, 50) + '...' : movie.overview}</p>
        </div>
        
        </div>;
    }
}