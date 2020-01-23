import React from 'react'
import Swiper from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Trailer = (props) => {
    const trailer = props.trailer;
    (() => {
        const swiperEl = document.querySelector('.trailer-container');
        if(!swiperEl) {
            return;
        }

        const slider = new Swiper(swiperEl, {
            init: true,
            spaceBetween: 10,
            observer: true,
            navigation: {
                prevEl: '.trailer-slide-prev',
                nextEl: '.trailer-slide-next'
            }

        });

    })()
    return (
        <section id="trailers">
            <h1>Trailers</h1>
            <div className="trailer-container">
                <FontAwesomeIcon className="trailer-slide-prev" icon={faChevronLeft} />
                <FontAwesomeIcon className="trailer-slide-next" icon={faChevronRight} />
                <div className="swiper-wrapper trailer-wrapper">

                    {trailer ? trailer.map((cur) => (
                        <iframe key={cur.id} className="swiper-slide trailer-slide" title="1" src={`https://www.youtube.com/embed/${cur.key}`}></iframe>
                    )) : ''}

                </div>
            </div>            
        </section>
    )
}
export default Trailer;
