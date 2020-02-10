import React, { useState, useEffect, useLayoutEffect } from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Profile.css';
import SetMediaType from '../../Reducers/SetMediaType';

const Profile = () => {

    const [currentMediaString, setCurrentMediaString] = useState('Favorite Movies');

    const config = useSelector(state => state.apiKeyConfig.images);
    const {favMovies, page} = useSelector(state => state.movieFavorite);
    const {favTV} = useSelector(state => state.tvFavorite);
    const {ratedMovie} = useSelector(state => state.movieRated);
    const {ratedTV} = useSelector(state => state.tvRated);

    const renderMedia = type => {
        let media;
        if(type === 'Favorite Movies') {
            media = favMovies.length > 0 ? favMovies.map((cur) => (
                <Link to={`/details/movie/${cur.id}`} key={cur.id} className="profile-slide">
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                </div>
            </Link>
            )): 'Please Favorite Movies To See';
        } else if(type === 'Favorite TV') {
            media = favTV.length > 0 ? favTV.map((cur) => (
                <Link to={`/details/movie/${cur.id}`} key={cur.id} className="profile-slide">
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                </div>
            </Link>
            )): 'Please Favorite TV To See';
        } else if(type === 'Rated Movies') {
            media = ratedMovie.length > 0 ? ratedMovie.map((cur) => (
                <Link to={`/details/movie/${cur.id}`} key={cur.id} className="profile-slide">
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                </div>
            </Link>
            )): 'Please Favorite TV To See';
        } else if(type === 'Rated TV') {
            media = ratedTV.length > 0 ? ratedTV.map((cur) => (
                <Link to={`/details/movie/${cur.id}`} key={cur.id} className="profile-slide">
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                </div>
            </Link>
            )): 'Please Favorite TV To See';
        }
        return media;
    }
    const hamburgerMenu = (e) => {
        e.target.classList.toggle('change');
        e.target.parentNode.classList.toggle('slide-profile-nav-container');
    }
    const mediaButtons = (e) => {
        const mediaButtons = document.querySelectorAll('.profile-btn');       
        const element = e.target.innerText;
        if(e.target.tagName === 'BUTTON') {
            setCurrentMediaString(element);            
            mediaButtons.forEach((cur, i) => {                
                cur = cur.innerText !== element ? cur.classList.remove('active-btn') : '';
            });
            mediaButtons.forEach((cur, i) => {                
                cur = cur.innerText === element ? cur.classList.add('active-btn') : '';
            });
        }
    }

    return (
        <div id="profile-container">
            <section className="profile-nav-container">
                <button className='ham-btn-container' onClick={hamburgerMenu}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </button>
                <div>
                    <figure className="avatar-figure">
                        <img src={'https://cdn.onlinewebfonts.com/svg/img_568656.png'} alt={''} />
                    </figure>
                    <p>Welcome Guest</p>
                    <a href={'/'}>Log Out</a>
                </div>
                <div className="toggle-btn-container" onClick={mediaButtons}>
                    <button className='profile-btn active-btn' name="favMovies">Favorite Movies</button>
                    <button className='profile-btn' name="favTV">Favorite TV</button>
                    <button className='profile-btn' name="ratedMovies">Rated Movies</button>
                    <button className='profile-btn' name="ratedTV">Rated TV</button>
                </div>
            </section>

            <div>
            <h1>{currentMediaString}</h1>
            <section className="profile-media-container">
                <div className="profile-media-wrapper">

                    {renderMedia(currentMediaString)}
                    
                </div>
            </section>
            <section className="profile-btn-container">
                <button className="prev-profile">Previous</button> Page {page}
                <button className="next-profile">Next</button>
            </section>
            </div>
        </div>
    );
}

export default Profile;