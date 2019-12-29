import React from 'react'

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import './SearchResults.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SearchResults = (props) => {
    return (
        <div>
            <Nav />
            <div className="search-container">
                <h2>Search Results for</h2>
                
                <div className="search-wrapper">

                    <a href={"/"} className="search-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                                <figure className="search-figure">
                                    <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="search-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                                <figure className="search-figure">
                                    <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="search-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                                <figure className="search-figure">
                                    <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="search-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                                <figure className="search-figure">
                                    <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="search-slide">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                            <figure className="search-figure">
                                <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                            </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="search-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                                <figure className="search-figure">
                                    <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="search-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                                <figure className="search-figure">
                                    <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>
                    <a href={"/"} className="search-slide">
                            <span><FontAwesomeIcon icon={faStar} /></span>
                                <figure className="search-figure">
                                    <img src={"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"} alt={"title"} />
                                </figure>
                        <h4>Title</h4>
                        <p>Genre</p>
                    </a>

                </div>

            </div>
            <Footer />
        </div>
    )
}
export default SearchResults;
