import React from 'react'

import './HomeSlider.css'

function HomeSlider() {
    return (
        <div className="swiper-container homeslider-container">
            <div className="swiper-wrapper homeslider-wrapper">
                <a href={"/"} className="swiper-slide homeslider-slide">
                    <figure className="homeslider-figure">
                        <img src={"http://hdqwalls.com/download/avengers-endgame-2019-official-poster-th-1920x1080.jpg"}  alt="title" />
                    </figure>
                    <div className="homeslider-info">
                        <p>Trending</p>
                        <h2>Title</h2>
                        <p>Movie</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default HomeSlider;
