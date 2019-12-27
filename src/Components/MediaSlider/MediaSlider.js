import React from 'react';

import "./MediaSlider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MediaSlider = (props) => {

    return (
        <div id="container">
        <h1>{props.title}</h1>
            <div className="swiper-container media-container">
                <div className="swiper-wrapper media-wrapper">
                    <a href={"/"} className="swiper-slider media-slide">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <figure className="media-figure">
                            <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                        </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="swiper-slider media-slide">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <figure className="media-figure">
                            <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                        </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="swiper-slider media-slide">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <figure className="media-figure">
                            <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                        </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="swiper-slider media-slide">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <figure className="media-figure">
                            <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                        </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="swiper-slider media-slide">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <figure className="media-figure">
                            <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                        </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="swiper-slider media-slide">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <figure className="media-figure">
                            <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                        </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MediaSlider;