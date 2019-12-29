import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

class MediaDetails extends Component {
    render(){
        return (
            <div className="media-details-container">

                <header>
                    <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                    <figure>
                        <img src={'https://hdqwalls.com/download/star-wars-the-rise-of-skywalker-2019-4k-mz-1920x1080.jpg'} alt={'title'} />
                    </figure>

                    <div>
                        <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                        <h1>Title</h1>
                        <p>Rating</p>
                        <p>Released</p>
                        <p>Genre</p>
                    </div>

                </header>

                <main>
                    <section>
                        <h1>Summary</h1>
                        <p>here is a summary</p>
                    </section>

                    <section>
                        <h1>Cast</h1>
                        <div className="swiper-container cast-container">
                            <div className="swiper-wrapper cast-wrapper">
                                <div className="cast-slide">
                                    <img />
                                    <h4>Name</h4>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section></section>

                    <section></section>
                    
                </main>
                
            </div>
        )
    }
}
export default MediaDetails;