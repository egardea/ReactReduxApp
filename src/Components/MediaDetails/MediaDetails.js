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
        this.getMediaData(this.props.match.params.id);
    }

    getMediaData = (id, type = this.props.match.params.type) => {
        if(type === 'movie') {
            this.props.creditsMovie(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.props.apiKey}`);
            this.props.detailsMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.props.apiKey}&language=en-US`);
            this.props.reviewsMovie(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.props.apiKey}&language=en-US&page=1`);
            this.props.trailersMovie(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.props.apiKey}&language=en-US`);
        } else if(type === 'tv') {
            this.props.creditsTV(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.props.apiKey}&language=en-US`);
            this.props.detailsTV(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.props.apiKey}&language=en-US`);
            this.props.reviewsTV(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${this.props.apiKey}&language=en-US&page=1`);
            this.props.trailersTV(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.props.apiKey}&language=en-US`);
        }
    }

    config = this.props.config.images;

    header = type => {
        switch(type) {
            case 'movie':
            return (
            <header>
                <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                <figure>
                    <img src={this.config && this.props.movieDetails.backdrop_path ? this.config.secure_base_url + this.config.backdrop_sizes[2] + this.props.movieDetails.backdrop_path : ''} alt={this.props.movieDetails.title} />
                </figure>

                <div className="movie-details-info">
                    <img src={this.config && this.props.movieDetails.poster_path ? this.config.secure_base_url + this.config.poster_sizes[3] + this.props.movieDetails.poster_path : ''} alt={this.props.movieDetails.title} />
                    <div>
                        <h2>{this.props.movieDetails.title}</h2>
                        <p>{this.props.movieDetails.vote_average} Rating</p>
                        <p>{this.props.movieDetails.status}</p>
                        <p>{this.props.movieDetails.budget}</p>
                        <p>{this.props.movieDetails.genres ? this.props.movieDetails.genres[0].name : ''}</p>
                    </div>
                </div>
            </header>
            );
            case 'tv' :
            return (
            <header>
                <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                <figure>
                    <img src={this.config && this.props.tvDetails.backdrop_path ? this.config.secure_base_url + this.config.backdrop_sizes[2] + this.props.tvDetails.backdrop_path : ''} alt={this.props.tvDetails.name} />
                </figure>

                <div className="movie-details-info">
                    <img src={this.config && this.props.tvDetails.poster_path ? this.config.secure_base_url + this.config.poster_sizes[3] + this.props.tvDetails.poster_path : ''} alt={this.props.tvDetails.title} />
                    <div>
                        <h2>{this.props.tvDetails.name}</h2>
                        <p>{this.props.tvDetails.vote_average} Rating</p>
                        <p>{this.props.tvDetails.status}</p>
                        <p>{this.props.movieDetails.budget}</p>
                        <p>{this.props.tvDetails.genres ? this.props.tvDetails.genres[0].name : ''}</p>
                    </div>
                </div>
            </header>
            );
            default:
                return null;
            }
    }
    summary = type => {
        switch(type){
            case 'movie':
                return (
                    <Summary summary={this.props.movieDetails.overview} />
                )
            case 'tv':
                return (
                    <Summary summary={this.props.tvDetails.overview} />
                )
            default:
                return null;
        }
    }
    cast = type => {
        switch(type) {
            case 'movie':
                return(
                    <Cast cast={this.props.movieCredits.cast} config={this.props.config.images} />
                )
            case 'tv':
                return (
                    <Cast cast={this.props.tvCredits.cast} config={this.props.config.images} />
                )
            default:
                return null;
        }
    }
    trailers = type => {
        switch(type) {
            case 'movie':
                return (
                    <Trailer trailer={this.props.movieTrailers} />
                )
            case 'tv':
                return (
                    <Trailer trailer={this.props.tvTrailers} />
                )
            default:
                return null;
        }
    }
    reviews = type => {
        switch(type) {
            case 'movie':
                return (
                    <Reviews reviews={this.props.movieReviews.results}/>
                )
            case 'tv':
                return (
                    <Reviews reviews={this.props.tvReviews.results} />
                )
            default:
                return null;
        }
    }
    
    render(){
        return (
            <div className="media-details-container">
                {this.header(this.props.match.params.type)}
                <main className="movie-details-main">

                    {this.summary(this.props.match.params.type)}
                    {this.cast(this.props.match.params.type)}
                    {this.trailers(this.props.match.params.type)}
                    {this.reviews(this.props.match.params.type)}
                    
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