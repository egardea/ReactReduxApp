import React from 'react'
import Swiper from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Cast = (props) => {
    
    (() => {
        const sliderElement = document.querySelector('.cast-container');
        if(!sliderElement){
            return;
        }

        const slider = new Swiper(sliderElement, {
            init: true,
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            observer: true,

            navigation: {
                nextEl: 'cast-slide-next',
                prevEl: 'cast-slide-prev'
            }
        })
    })();

    return (
        <section>
            <h1>Cast</h1>
                <div className="swiper-container cast-container">
                    <FontAwesomeIcon className="cast-slide-prev" icon={faChevronLeft} />
                    <FontAwesomeIcon className="cast-slide-next" icon={faChevronRight} />
                    <div className="swiper-wrapper cast-wrapper">
                        <div className="cast-slide">
                                    <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                                    <h4>Name</h4>
                        </div>
                        <div className="cast-slide">
                                    <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                                    <h4>Name</h4>
                        </div>
                        <div className="cast-slide">
                                    <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                                    <h4>Name</h4>
                        </div>
                        <div className="cast-slide">
                                    <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                                    <h4>Name</h4>
                        </div>
                        <div className="cast-slide">
                                    <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                                    <h4>Name</h4>
                        </div>
                        <div className="cast-slide">
                                    <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                                    <h4>Name</h4>
                        </div>
                        <div className="cast-slide">
                                    <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                                    <h4>Name</h4>
                        </div>
                </div>
            </div>
        </section>
    )
}
export default Cast;
