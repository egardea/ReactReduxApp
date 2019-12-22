import React, { Component } from 'react';

import "./MediaSlider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class MediaSlider extends Component {
    render() {
        return (
            <div id="container">
                <div className="swiper-container media-container">
                    <div className="swiper-wrapper media-wrapper">
                        <a href={"/"} className="swiper-slider media-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                            <figure className="media-figure">
                                <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                            </figure>
                            <h4>Title</h4>
                            <p>Action</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaSlider;