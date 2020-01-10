import React, { Component } from 'react'
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import HomeSlider from '../HomeSlider/HomeSlider';
import MediaSlider from '../MediaSlider/MediaSlider';
import MediaButtons from '../MediaButtons/MediaButtons';
import Footer from '../Footer/Footer';

import './Home.css'

class Home extends Component {

    render() {
        return (
            <div>
                <Nav />
                <HomeSlider slides={this.props.trendingMovies} config={this.props.config} />
                <main>
                    <MediaButtons />
                    <MediaSlider title="Now Playing" />
                    <MediaSlider title="Coming Soon" />
                    <MediaSlider title="Popular" />
                    <MediaSlider title="Top Rated" />
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trendingMovies: state.trendingMovie.result,
    config: state.apiKeyConfig,
})

export default connect(mapStateToProps)(Home);
