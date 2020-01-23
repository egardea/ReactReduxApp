import React, { Component } from 'react'
import { connect } from 'react-redux';
import Swiper from 'swiper';

import Nav from '../Nav/Nav';
import HomeSlider from '../HomeSlider/HomeSlider';
import MediaSlider from '../MediaSlider/MediaSlider';
import MediaButtons from '../MediaButtons/MediaButtons';
import Footer from '../Footer/Footer';

import setMediaType from '../../Actions/SetMediaType';

import movieNowPlaying from '../../Actions/MovieActions/NowPlayingMovies';
import moviePopular from '../../Actions/MovieActions/PopularMovies';
import movieTopRated from '../../Actions/MovieActions/TopRatedMovies';
import movieUpcoming from '../../Actions/MovieActions/UpcomingMovies';

import tvOnAir from '../../Actions/TVActions/TVOnAir';
import tvPopular from '../../Actions/TVActions/TVPopular';
import tvTopRated from '../../Actions/TVActions/TopRated';
import tvAiringToday from '../../Actions/TVActions/TVAiringToday';

import './Home.css'

class Home extends Component {

    componentDidMount() {
        if(this.props.itemType === 'MOVIE') {
            this.getMovieData();
        } else if(this.props.itemType === 'TV') {
            this.getTVData();
        }
    }

    getMovieData = () => {
        this.props.movieNowPlaying(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.moviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.movieTopRated(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.movieUpcoming(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.props.apiKey}&language=en-US&page=1`);
    }
    getTVData= () => {
        this.props.tvPopular(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.tvAiringToday(`https://api.themoviedb.org/3/tv/airing_today?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.tvTopRated(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.tvOnAir(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.props.apiKey}&language=en-US&page=1`);
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

        let media;
        if(this.props.itemType === 'MOVIE') {
            media = 
            <div>
            <MediaSlider title="Now Playing" slides={this.props.nowPlayingMovies} config={this.props.config} type={this.props.itemType} />
            <MediaSlider title="Popular Movies" slides={this.props.popularMovies} config={this.props.config} type={this.props.itemType} />
            <MediaSlider title="Top Rated Movies" slides={this.props.topRatedMovies} config={this.props.config} type={this.props.itemType} />
            <MediaSlider title="Upcoming Movies" slides={this.props.upcomingMovies} config={this.props.config} type={this.props.itemType} />
            </div>
        } else if(this.props.itemType === 'TV') {
            media = 
            <div>
            <MediaSlider title="TV On Air" slides={this.props.onAirTV} config={this.props.config} type={this.props.itemType} />
            <MediaSlider title="Popular TV" slides={this.props.popularTV} config={this.props.config} type={this.props.itemType} />
            <MediaSlider title="Top Rated TV" slides={this.props.topRatedTV} config={this.props.config} type={this.props.itemType} />
            <MediaSlider title="TV Airing Today" slides={this.props.airingTodayTV} config={this.props.config} type={this.props.itemType} />
            </div>
        }

        return (
            <div>
                <Nav />
                <HomeSlider slides={this.props.trendingMovies} config={this.props.config} genreList={this.props.itemType === 'TV' ? this.props.tvGenre : this.props.movieGenre} itemType={this.props.itemType} />
                <div id="media-main">
                    <div className="btn-container">
                        <button onClick={() => {this.props.setMediaType('MOVIES'); this.getMovieData();}}>Movies</button>
                        <button onClick={() => {this.props.setMediaType('TV'); this.getTVData();}}>TV</button>
                    </div>
                    {media}                       
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.apiKeyConfig.apiKey,
    config: state.apiKeyConfig,
    itemType: state.setMediaType.itemType,

    movieGenre: state.movieGenre.genres,
    trendingMovies: state.trendingMovie.result,
    nowPlayingMovies: state.nowPlayingMovies.results,
    popularMovies: state.popularMovies.results,
    topRatedMovies: state.topRatedMovies.results,
    upcomingMovies: state.upcomingMovies.results,

    tvGenre: state.tvGenre.genres,
    trendingTV: state.trendingTV.result,
    onAirTV: state.tvonAir.results,
    popularTV: state.popularTV.results,
    topRatedTV: state.topRated.results,
    airingTodayTV: state.tvairingToday.results,
})

const mapDispatchToProps = dispatch => ({
    setMediaType: type => dispatch(setMediaType(type)),

    movieNowPlaying: url => dispatch(movieNowPlaying(url)),
    moviePopular: url => dispatch(moviePopular(url)),
    movieTopRated: url => dispatch(movieTopRated(url)),
    movieUpcoming: url => dispatch(movieUpcoming(url)),

    tvOnAir: url => dispatch(tvOnAir(url)),
    tvPopular: url => dispatch(tvPopular(url)),
    tvTopRated: url => dispatch(tvTopRated(url)),
    tvAiringToday: url => dispatch(tvAiringToday(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
