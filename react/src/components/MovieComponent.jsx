import React from 'react';
import { MovieProvider } from '../services/MovieProvider';
import { Link } from 'react-router-dom';
import { API_BASE_URL_FOR_IMAGES } from '../services/MovieProvider';


export class MovieComponent extends React.Component {
    movieProvider;

    constructor(props) {
        super(props);
        this.state = {};
        this.movieProvider = new MovieProvider();
    }

    getMovieDetails() {
        this.props.match.params.movieId
            && this.movieProvider.getMovieDetails(this.props.match.params.movieId)
                .then(response => { this.setState({ movie: response.data }); })
                .catch(error => console.log(error));
    }

    render() {
        if (!this.state.movie) {
            this.getMovieDetails();
        }

        const { movie = {} } = this.state;

        return <div className="movie-page" style={{background: "url("+API_BASE_URL_FOR_IMAGES+movie.poster_path+")"}}>
                    <div className="movie-page__mask"></div>
                    <div className="movie-page__left-side">
                        <img className="movie-page__image" src={API_BASE_URL_FOR_IMAGES+movie.poster_path} alt={movie.original_title}/>
                        <div className="movie-page__rate">
                                <span className="movie-page__vote" style={{color: voteColor(movie.vote_average)}}>{movie.vote_average}</span>
                                <span style={{color: voteColor(movie.vote_average)}}>{movie.vote_count}</span>
                        </div>
                    </div>
                    <div className="movie-page__right-side">
                        <h1 className="movie-page__title">{movie.original_title}</h1>
                        
                        

                        <div className="movie-page__description">
                            <p><span className="movie-page__point">Release date:</span> {movie.release_date}</p>
                            <p><span className="movie-page__point">Age:</span> {movie.adult?"18+":randomInteger(6, 18)+"+"}</p>
                            <p><span className="movie-page__point">Original Language:</span> {String(movie.original_language).toUpperCase()}</p>
                            {/* <p>Original Language: <img src={API_BASE_URL_FOR_IMAGES+movie.backdrop_path} alt=""/></p> */}
                            <p className="movie-page__overview"><span className="movie-page__point">Overview:</span> {movie.overview}</p>
                            
                        </div>
                    </div>
                </div>;
        // <div className='custom_bg'>
        //     <div className='single_column'>
        //         <div className='poster'>
        //             <div className='image_content'>
        //                 Here will be image
        //                 </div>
        //             <div>
        //                 {movie.original_title}
        //             </div>
        //             <div>
        //                 Popularity: {movie.popularity}
        //             </div>
        //         </div>
        //         <div className='header_poster_wrapper'>
        //             <div className='header_info'>
        //                 <h3>Overview</h3>
        //                 <div className='overview'>
        //                     <p>{movie.overview}</p>
        //                     <p>Release data: {movie.release_date}</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <Link to='/'>Back to popular movies</Link>
        //         </div>
        //     </div>
        // </div>;
    }
}
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function voteColor(rate){
    if(rate<7 && rate > 5)
        return "yellow";
    if(rate<=5)
        return "red";
    if(rate=>7)
        return "green";
}