import React, {Component} from 'react'
import { connect } from 'react-redux';
import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import './MediaDetails.css';
import Trailer from './Trailer';
import Summary from './Summary';
import Cast from './Cast';
import Reviews from './Reviews';

import creditsMovie from '../../Actions/MovieActions/MovieCredits';
import detailsMovie from '../../Actions/MovieActions/MovieDetails';
import reviewsMovie from '../../Actions/MovieActions/MovieReviews';
import trailersMovie from '../../Actions/MovieActions/MovieTrailers';

import creditsTV from '../../Actions/TVActions/TVCredits';
import detailsTV from '../../Actions/TVActions/TVDetails';
import reviewsTV from '../../Actions/TVActions/TVReviews';
import trailersTV from '../../Actions/TVActions/TVTrailers';

class MediaDetails extends Component {

    componentDidMount() {
        this.getMediaData(this.props.match.params.id, this.props.match.params.type);
    }

    getMediaData = (id, type) => {
        if(type === 'MOVIE') {
            this.props.creditsMovie(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.props.apiKey}`);
            this.props.detailsMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.props.apiKey}&language=en-US`);
            this.props.reviewsMovie(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.props.apiKey}&language=en-US&page=1`);
            this.props.trailersMovie(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.props.apiKey}&language=en-US`);
        } else if(type === 'TV') {
            this.props.creditsTV(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.props.apiKey}&language=en-US`);
            this.props.detailsTV(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.props.apiKey}&language=en-US`);
            this.props.reviewsTV(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${this.props.apiKey}&language=en-US&page=1`);
            this.props.trailersTV(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.props.apiKey}&language=en-US`);
        }
    }
    
    render(){
        const config = this.props.config.images;
        return (
            <div className="media-details-container">

                <header>
                    <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                    <figure>
                        <img src={config && this.props.movieDetails.backdrop_path ? config.secure_base_url + config.backdrop_sizes[2] + this.props.movieDetails.backdrop_path : ''} alt={this.props.movieDetails.title} />
                    </figure>

                    <div className="movie-details-info">
                        <img src={config && this.props.movieDetails.backdrop_path ? config.secure_base_url + config.poster_sizes[3] + this.props.movieDetails.poster_path : ''} alt={this.props.movieDetails.title} />
                        <div>
                            <h2>{this.props.movieDetails.title}</h2>
                            <p>{this.props.movieDetails.vote_average} Rating</p>
                            <p>{this.props.movieDetails.status}</p>
                            <p>Budget</p>
                            <p>{this.props.movieDetails.genres ? this.props.movieDetails.genres[0].name : ''}</p>
                        </div>
                        
                    </div>

                </header>

                <main className="movie-details-main">

                    <Summary summary={this.props.movieDetails.overview} />

                    <Cast cast={this.props.movieCredits.cast} config={this.props.config.images} />

                    <Trailer trailer={this.props.movieTrailers.results} />

                    <Reviews reviews={this.props.movieReviews.results} />
                    
                </main>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.apiKeyConfig.apiKey,
    config: state.apiKeyConfig,
    type: state.setMediaType,

    movieCredits: state.movieCredits,
    movieDetails: state.movieDetails,
    movieReviews: state.movieReviews,
    movieTrailers: state.movieTrailers,

    tvCredits: state.tvCredits,
    tvDetails: state.tvDetails,
    tvReviews: state.tvReviews,
    tvTrailers: state.tvTrailers,
});

const mapDispatchToProps = dispatch => ({
    detailsMovie: url => dispatch(detailsMovie(url)),
    creditsMovie: url => dispatch(creditsMovie(url)),
    reviewsMovie: url => dispatch(reviewsMovie(url)),
    trailersMovie: url => dispatch(trailersMovie(url)),

    creditsTV: url => dispatch(creditsTV(url)),
    detailsTV: url => dispatch(detailsTV(url)),
    reviewsTV: url => dispatch(reviewsTV(url)),
    trailersTV: url => dispatch(trailersTV(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MediaDetails);