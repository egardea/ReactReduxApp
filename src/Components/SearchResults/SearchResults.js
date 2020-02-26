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

    //checks if there is a new search string and updates data
    componentDidUpdate(nextProps) {
        if(this.props.match.params.id !== nextProps.id){
            this.props.searchResult(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false&region=US`);
        }
    }

    render(){
        const config = this.props.config;
        return (
            <div>
                <Nav />
                <div className="search-container">
                    <h2>Search Results for {this.props.match.params.id}</h2>
                    
                    <div className="search-wrapper">

                        {this.props.searchResults ? this.props.searchResults.results.map((cur) => 
                        (
                            <Link key={cur.id} to={`/details/${cur.media_type}/${cur.id}`} className="search-slide">
    <span><FontAwesomeIcon icon={faStar} /> {cur.vote_average}</span>
                                    <figure className="search-figure">
                                        <img src={`${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.poster_sizes[6] : ''}${cur.poster_path}`} alt={cur.title} />
                                    </figure>
                            <h4>{cur.title}</h4>
                            </Link>
                        )) : ''}
    
                    </div>
    
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.apiKeyConfig.apiKey,
    config: state.apiKeyConfig,
    searchResults: state.searchResult.results,
});

const mapDispatchToProps = dispatch => ({
    searchResult: url => dispatch(searchResult(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
