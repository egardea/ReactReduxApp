import React, { useState, useEffect, useLayoutEffect } from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const [currentMedia, setCurrentMedia] = useState('Favorite Movies');

    const config = useSelector(state => state.apiKeyConfig.images);
    const {favMovies, page} = useSelector(state => state.movieFavorite);
    /*constructor(props) {
        super(props);
        this.state = {
            currentMedia: 'Favorite Movies'
        }
    }*/
    /*componentWillMount() {
        this.getStorage();
        this.renderMedia(this.state.currentMedia);
    };*/

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
        } 
        return media;
    }
    const hamburgerMenu = (e) => {
        e.target.classList.toggle('change');
        e.target.parentNode.classList.toggle('slide-profile-nav-container');
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
                    <figure>
                        <img src={'https://png2.cleanpng.com/sh/2766aa268cfa95394a6057258759ef78/L0KzQYm3VcIyN5R6R91yc4Pzfri0gB9ueKZ5feQ2aXPyfsS0lgNmel51itHvaXzoPbL9ggRiel5ritd3Y3iwgLb2kPxmNWZnSKUBNXW4QrftWPM3Nmg2TKg7MEe2QYa5Vsk1QWQ5UaMENkWxgLBu/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e52ff8c6.7146207315269493491965.png'} alt={''} /> 
                    </figure>
                    <p>Welcome Guest</p>
                    <a href={'/'}>Log Out</a>
                </div>
                <div className="toggle-btn-container">
                    <button className='profile-btn active-btn' name="favMovies">Favorite Movies</button>
                    <button className='profile-btn' name="favTV">Favorite TV</button>
                    <button className='profile-btn' name="ratedMovies">Rated Movies</button>
                    <button className='profile-btn' name="ratedTV">Rated TV</button>
                </div>
            </section>

            <div>
            <h1>{currentMedia}</h1>
            <section className="profile-media-container">
                <div className="profile-media-wrapper">

                    {renderMedia(currentMedia)}
                    
                </div>
            </section>
            </div>

            <section className="profile-btn-container">
                <button className="prev-profile">Previous</button> Page {page}
                <button className="next-profile">Next</button>
            </section>
        </div>
    );
}

export default Profile;