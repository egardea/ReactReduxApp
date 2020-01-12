import React from 'react';
import Swiper from 'swiper';
import { Link } from 'react-router-dom';

import './HomeSlider.css'

const HomeSlider = (props) => {

    (() => {
            const sliderEl = document.querySelector('.homeslider-container');
            if(!sliderEl) {
                return;
            }
            const slider = new Swiper(sliderEl, {
                init: true,
                direction: 'verticle',
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                observer: true,
                observeSlideChildren: true,

                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
    })();

    const config = props.config;

    const getGenreStr = id => {
        let mainGenre;
        props.genreList.forEach((genre) => {
            if(genre.id === id[0]) {
                return mainGenre = genre.name;
            }
        });
        return mainGenre;
    }

    return (
            <div className="homeslider-container">
                <div className="swiper-wrapper homeslider-wrapper">
                    {props.slides.map((cur) => (
                        <Link to={"/"} key={cur.id} className="swiper-slide homeslider-slide">
                        <figure className="homeslider-figure">
                            <img src={config.images ? config.images.secure_base_url + config.images.backdrop_sizes[2] + cur.backdrop_path : ''}  alt={cur.title} />
                        </figure>
                        <div className="homeslider-info">
                            <p>Trending</p>
                            <h2>{cur.title}</h2>
                            <p>{getGenreStr(cur.genre_ids)} | {cur.vote_average}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
    );

};
export default HomeSlider;
