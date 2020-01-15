import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import searchResult from '../../Actions/SearchResult';

import './SearchResults.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class SearchResults extends Component{

    state = {
        page: 1
    }

    componentDidMount() {
        this.props.searchResult(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false`);
    }

    render(){
        return (
            <div>
                <Nav />
                <div className="search-container">
                    <h2>Search Results for</h2>
                    
                    <div className="search-wrapper">
    
                        <Link to={`/search-result/`} className="search-slide">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                    <figure className="search-figure">
                                        <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                    </figure>
                            <h4>Title</h4>
                            <p>Genre</p>
                        </Link>
    
                    </div>
    
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.apiKeyConfig.apiKey,
    searchResults: state.searchResult,
});

const mapDispatchToProps = dispatch => ({
    searchResult: url => dispatch(searchResult(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
