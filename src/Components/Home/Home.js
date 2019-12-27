import React, { Component } from 'react'

import Nav from '../Nav/Nav';
import HomeSlider from '../HomeSlider/HomeSlider';
import MediaSlider from '../MediaSlider/MediaSlider';
import MediaButtons from '../MediaButtons/MediaButtons';

import './Home.css'

class Home extends Component {
    
    render() {
        return (
            <div>
                <Nav />
                <HomeSlider />
                <main>
                    <MediaButtons />
                    <MediaSlider title="Now Playing" />
                </main>
            </div>
        )
    }
}

export default Home;
