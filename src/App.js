import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
import MediaDetails from './Components/MediaDetails/MediaDetails';
import Profile from './Components/Profile/Profile';
import Login from './Components/Profile/Login';

import apiKeyConfig from './Actions/ApiKeyConfig';
import searchTrending from './Actions/MovieActions/Trending';
import searchTrendingTV from './Actions/TVActions/Trending';
import tvGenre from './Actions/TVActions/TVGenre';
import movieGenre from './Actions/MovieActions/MovieGenre';

class App extends Component {
  componentDidMount(){
    this.props.apiKeyConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
    this.props.searchTrending(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.props.apiKey}`);
    this.props.searchTrendingTV(`https://api.themoviedb.org/3/trending/tv/day?api_key=${this.props.apiKey}`);
    this.props.movieGenre(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.props.apiKey}&language=en-US`);
    this.props.tvGenre(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.props.apiKey}&language=en-US`);
  }
  render() {
    return (
      <Switch>
        <Route path="/search-result/:id" component={SearchResults} />
        <Route path="/details/:type/:id" component={MediaDetails} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  apiKey: state.apiKeyConfig.apiKey
});

const mapDispatchToProps = dispatch => ({
  apiKeyConfig: url => dispatch(apiKeyConfig(url)),
  searchTrending: url => dispatch(searchTrending(url)),
  searchTrendingTV: url => dispatch(searchTrendingTV(url)),
  movieGenre: url => dispatch(movieGenre(url)),
  tvGenre: url => dispatch(tvGenre(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
