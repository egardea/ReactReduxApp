import React from 'react';

import "./MediaSlider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MediaSlider = (props) => {

    const renderGenres = genres => {
        if(genres > 1) {
            return genres = 'Hello';
        } else {
            return genres = 'Hi';
        }
    }

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
                        <p>{renderGenres(2)}</p>
                        <p>{renderGenres(1)}</p>
                        <p>{props.title}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MediaSlider;