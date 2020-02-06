import React, { useState, useEffect, useLayoutEffect } from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const [favMovies, setFavMovies] = useState([]);
    const [favTV, setFavTV] = useState([]);
    const [ratedMovies, setRatedMovies] = useState([]);
    const [ratedTV, setRatedTV] = useState([]);
    const [currentMedia, setCurrentMedia] = useState('Favorite Movies');

    const config = useSelector(state => state.apiKeyConfig.images);
    const favoriteMovies = useSelector(state => state.movieFavorite.favMovies);
    /*constructor(props) {
        super(props);
        this.state = {
            favMovies: [],
            favTV: [],
            ratedMovies: [],
            ratedTV: [],
            currentMedia: 'Favorite Movies'
        }
    }*/
    /*componentWillMount() {
        this.getStorage();
        this.renderMedia(this.state.currentMedia);
    };*/
    const toggleMediaBtn = (e) => {
        const mediaButtons = document.querySelectorAll('.profile-btn');
        const element = e.target.innerText;
        if(e.target.tagName === 'BUTTON') {
            setCurrentMedia(element);
            mediaButtons.forEach((cur, i) => {
                cur = cur.className === 'profile-btn active-btn' ? cur.classList.remove('active-btn') : '';
            });
            mediaButtons.forEach((cur, i) => {
                cur = cur.innerText === element ? cur.classList.add('active-btn') : '';
            });
        }
    }

    const renderMedia = type => {
        let media;
        if(type === 'Favorite Movies') {
            media = favoriteMovies.length > 0 ? favoriteMovies.map((cur) => (
                <Link to={`/details/movie/${cur.id}`} key={cur.id} className="profile-slide">
                <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                </div>
            </Link>
            )): 'Please Favorite Movies To See';
        } else if(type === 'Rated Movies') {
            media = ratedMovies.length > 0 ? ratedMovies.map((cur) => (
                <Link to={`/details/movie/${cur[0]}`} key={cur[0]} className="profile-slide">
                <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur[3] : ''} alt={cur[1]} />
                </figure>
                <div>
                    <h4>{cur[1]}</h4>
                    <p>{cur[2][0].name}</p>
                </div>
            </Link>
            )): 'Please Rate Movies To See';
        } else if(type === 'Favorite TV') {
            media = favTV.length > 0 ? favTV.map((cur) => (
                <Link to={`/details/tv/${cur[0]}`} key={cur[0]} className="profile-slide">
                <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur[3] : ''} alt={cur[1]} />
                </figure>
                <div>
                    <h4>{cur[1]}</h4>
                    <p>{cur[2][0].name}</p>
                </div>
            </Link>
            )): 'Please Favorite TV To See';
        } else if(type === 'Rated TV') {
            media = ratedTV.length > 0 ? ratedTV.map((cur) => (
                <Link to={`/details/tv/${cur[0]}`} key={cur[0]} className="profile-slide">
                <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur[3] : ''} alt={cur[1]} />
                </figure>
                <div>
                    <h4>{cur[1]}</h4>
                    <p>{cur[2][0].name}</p>
                </div>
            </Link>
            )): 'Please Favorite TV To See';
        }
        return media;
    }

        return (
            <div id="profile-container">
                <section className="profile-nav-container">
                    <div>
                        <figure>
                            <img src={'https://png2.cleanpng.com/sh/2766aa268cfa95394a6057258759ef78/L0KzQYm3VcIyN5R6R91yc4Pzfri0gB9ueKZ5feQ2aXPyfsS0lgNmel51itHvaXzoPbL9ggRiel5ritd3Y3iwgLb2kPxmNWZnSKUBNXW4QrftWPM3Nmg2TKg7MEe2QYa5Vsk1QWQ5UaMENkWxgLBu/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e52ff8c6.7146207315269493491965.png'} alt={''} /> 
                        </figure>
                        <p>Welcome Guest</p>
                        <a href={'/'}>Log Out</a>
                    </div>
                    <div className="toggle-btn-container" onClick={toggleMediaBtn}>
                        <button className='profile-btn active-btn' name="favMovies">Favorite Movies</button>
                        <button className='profile-btn' name="favTV">Favorite TV</button>
                        <button className='profile-btn' name="ratedMovies">Rated Movies</button>
                        <button className='profile-btn' name="ratedTV">Rated TV</button>
                    </div>
                </section>
                <section className="profile-media-container">
                    <h1>{currentMedia}</h1>
                    <div className="profile-media-wrapper">

                        {renderMedia(currentMedia)}
                        
                    </div>
                    
                </section>
                <div className="profile-btn-container">
                        <button className="prev-profile">Previous</button>
                        <button className="next-profile">Next</button>
                    </div>
            </div>
        )
}

export default Profile;