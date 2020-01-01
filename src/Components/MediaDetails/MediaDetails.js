import React, {Component} from 'react'
import Swiper from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import './MediaDetails.css';
import Trailer from './Trailer';
import Summary from './Summary';
import Cast from './Cast';
import Reviews from './Reviews';

class MediaDetails extends Component {
    
    render(){
        
        return (
            <div className="media-details-container">

                <header>
                    <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                    <figure>
                        <img src={'https://hdqwalls.com/download/star-wars-the-rise-of-skywalker-2019-4k-mz-1920x1080.jpg'} alt={'title'} />
                    </figure>

                    <div className="movie-details-info">
                        <img src={'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'} alt={'Tile'} />
                        <div>
                            <h2>Title</h2>
                            <p>7.2 Rating</p>
                            <p>Released</p>
                            <p>Genre</p>
                        </div>
                        
                    </div>

                </header>

                <main className="movie-details-main">

                    <Summary />

                    <Cast />

                    <Trailer />

                    <Reviews />
                    
                </main>
                
            </div>
        )
    }
}
export default MediaDetails;