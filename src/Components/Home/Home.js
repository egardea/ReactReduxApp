import React, { Component } from 'react'
import { connect } from 'react-redux';
import Swiper from 'swiper';

import Nav from '../Nav/Nav';
import HomeSlider from '../HomeSlider/HomeSlider';
import MediaSlider from '../MediaSlider/MediaSlider';
import MediaButtons from '../MediaButtons/MediaButtons';
import Footer from '../Footer/Footer';

import movieNowPlaying from '../../Actions/MovieActions/NowPlayingMovies';
import moviePopular from '../../Actions/MovieActions/PopularMovies';
import movieTopRated from '../../Actions/MovieActions/TopRatedMovies';
import movieUpcoming from '../../Actions/MovieActions/UpcomingMovies';

import './Home.css'

class Home extends Component {

    componentDidMount() {
        this.props.movieNowPlaying(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.moviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.movieTopRated(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.movieUpcoming(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.props.apiKey}&language=en-US&page=1`);
    }

    
    render() {
        (() => {
            const slideEl = document.querySelectorAll('.media-container');
            if(!slideEl){
                return;
            }
    
            const slider = new Swiper(slideEl, {
                init: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
                observer: true,
                loop: true,
                preventInteractionOnTransition: true,
                navigation: {
                    prevEl: '.media-btn-prev',
                    nextEl: '.media-btn-next',
                }
            });
        })();
        let movie;
        if(this.props.setMediaType === 'MOVIE') {
            movie = 
            <div>
            <MediaSlider title="Now Playing" slides={this.props.nowPlayingMovies} config={this.props.config} type={this.props.setMediaType} />
            <MediaSlider title="Popular Movies" slides={this.props.popularMovies} config={this.props.config} type={this.props.setMediaType} />
            <MediaSlider title="Top Rated Movies" slides={this.props.topRatedMovies} config={this.props.config} type={this.props.setMediaType} />
            <MediaSlider title="Upcoming Movies" slides={this.props.upcomingMovies} config={this.props.config} type={this.props.setMediaType} />
            </div>

        }
        return (
            <div>
                <Nav />
                <HomeSlider slides={this.props.trendingMovies} config={this.props.config} genreList={this.props.movieGenre} />
                <div id="media-main">
                    <MediaButtons />
                    {movie}                       
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.apiKeyConfig.apiKey,
    trendingMovies: state.trendingMovie.result,
    config: state.apiKeyConfig,
    movieGenre: state.movieGenre.genres,
    nowPlayingMovies: state.nowPlayingMovies.results,
    popularMovies: state.popularMovies.results,
    topRatedMovies: state.topRatedMovies.results,
    upcomingMovies: state.upcomingMovies.results,
    setMediaType: state.setMediaType.itemType,
})

const mapDispatchToProps = dispatch => ({
    movieNowPlaying: url => dispatch(movieNowPlaying(url)),
    moviePopular: url => dispatch(moviePopular(url)),
    movieTopRated: url => dispatch(movieTopRated(url)),
    movieUpcoming: url => dispatch(movieUpcoming(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
