import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
import MediaDetails from './Components/MediaDetails/MediaDetails';

import apiKeyConfig from './Actions/ApiKeyConfig';
import searchTrending from './Actions/MovieActions/Trending';
import searchTrendingTV from './Actions/TVActions/Trending';

class App extends Component {
  componentDidMount(){
    this.props.apiKeyConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
    this.props.searchTrending(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.props.apiKey}`);
    this.props.searchTrendingTV(`https://api.themoviedb.org/3/trending/tv/day?api_key=${this.props.apiKey}`);

  }
  render() {
    return (
      <Router>
        <Home />
      </Router>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
