import React from 'react'
import Swiper from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Cast = (props) => {

    const cast = props.cast;
    const config = props.config;
    (() => {
        const swiperEl = document.querySelector('.cast-container');
        if(!swiperEl) {
            return;
        }

        const slider = new Swiper(swiperEl, {
            init: true,
            spaceBetween: 30,
            observer: true,
            navigation: {
                prevEl: '.cast-slide-prev',
                nextEl: '.cast-slide-next'
            }

        });

    })()
    return (
        <section>
            <h1>Cast</h1>
            <div className="swiper-container cast-container">
                <FontAwesomeIcon className="cast-slide-prev" icon={faChevronLeft} />
                <FontAwesomeIcon className="cast-slide-next" icon={faChevronRight} />
                <div className="swiper-wrapper cast-wrapper">

                    {cast ? cast.map((cur) => (
                        <div key={cur.id} className="swiper-slide cast-slide">
                            <img src={cast && config ? config.secure_base_url + config.profile_sizes[1] + cur.profile_path : ''} alt={cur.name} />
                            <h4>{cur.name}</h4>
                        </div>
                    )) : ''}

                </div>
            </div>
        </section>
    )
}
export default Cast;
