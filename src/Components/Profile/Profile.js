import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logOut} from '../../Actions/Session';
import {deleteFavorite} from '../../Actions/MovieActions/MovieFavorite';
import {deleteRatedMovie} from '../../Actions/MovieActions/MovieRated';
import {deleteFavTV} from '../../Actions/TVActions/TVFavorite';
import {deleteRatedTV} from '../../Actions/TVActions/TVRated';

import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const config = useSelector(state => state.apiKeyConfig.images);
    const dispatch = useDispatch();
    const {favMovies} = useSelector(state => state.movieFavorite);
    const {favTV} = useSelector(state => state.tvFavorite);
    const {ratedMovie} = useSelector(state => state.movieRated);
    const {ratedTV} = useSelector(state => state.tvRated);

    const [currentMediaString, setCurrentMediaString] = useState('Favorite Movies');
    const [currentMedia, setCurrentMedia] = useState(favMovies);
    const [page, setPage] = useState(1);

    const deleteItem = (e) => {
        if(e.target.id !== 'delete-btn') return;
        if(currentMediaString === 'Favorite Movies') {
            dispatch(deleteFavorite(e.target.parentNode.dataset.id));
            setCurrentMedia(favMovies);
        } else if(currentMediaString === 'Favorite TV') {
            dispatch(deleteFavTV(e.target.parentNode.dataset.id));
            setCurrentMedia(favTV);
        } else if(currentMediaString === 'Rated Movies'){
            dispatch(deleteRatedMovie(e.target.parentNode.dataset.id));
            setCurrentMedia(ratedMovie);
        } else if(currentMediaString === 'Rated TV'){
            dispatch(deleteRatedTV(e.target.parentNode.dataset.id));
            setCurrentMedia(ratedTV);
        }
    }
    const renderMedia = (type, array, pageNum) => {
        let media;
        let lastIndex = pageNum * 12;
        let firstIndex = lastIndex -12;
        let newArr = array.slice(firstIndex, lastIndex);
        if(type === 'Favorite Movies') {
            media = newArr.length > 0 ? newArr.map((cur, index) => (
                <div key={cur.id} data-id={cur.id} className="profile-slide">
                    <div id="delete-btn">
                        <div></div>
                        <div></div>
                    </div>
                <Link to={`/details/movie/${cur.id}`}>
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                </div>
                </Link>
                </div>
            )): 'Please Favorite Movies To See';
        } else if(type === 'Favorite TV') {
            media = newArr.length > 0 ? newArr.map((cur, index) => (
                <div key={cur.id} data-id={cur.id} className="profile-slide">
                    <div id="delete-btn">
                        <div></div>
                        <div></div>
                    </div>
                <Link to={`/details/tv/${cur.id}`} key={cur.id} className="profile-slide">
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                </div>
            </Link>
            </div>  
            )): 'Please Favorite TV To See';
        } else if(type === 'Rated Movies') {
            media = newArr.length > 0 ? newArr.map((cur, index) => (
                <div key={cur.id} data-id={cur.id} className="profile-slide">
                    <div id="delete-btn">
                        <div></div>
                        <div></div>
                    </div>
                <Link to={`/details/movie/${cur.id}`} key={cur.id} className="profile-slide">
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                    <p>You rated {cur.ourRating} <FontAwesomeIcon icon={faStar} /></p>
                </div>
            </Link>
            </div>
            )): 'Please Favorite TV To See';
        } else if(type === 'Rated TV') {
            media = newArr.length > 0 ? newArr.map((cur, index) => (
                <div key={cur.id} data-id={cur.id} className="profile-slide">
                    <div id="delete-btn">
                        <div></div>
                        <div></div>
                    </div>
                <Link to={`/details/tv/${cur.id}`} key={cur.id} className="profile-slide">
                <figure className="profile-figure">
                <img src={config ? config.secure_base_url + config.poster_sizes[2] + cur.img : ''} alt={cur.title} />
                </figure>
                <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                    <p>You rated {cur.ourRating} <FontAwesomeIcon icon={faStar} /></p>
                </div>
            </Link>
            </div>
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
        let mediaArr;
        if(element === 'Favorite Movies') {
            mediaArr = setCurrentMedia(favMovies);
        } else if(element === 'Favorite TV') {
            mediaArr = setCurrentMedia(favTV);
        } else if(element === 'Rated Movies') {
            mediaArr = setCurrentMedia(ratedMovie);
        } else if(element === 'Rated TV') {
            mediaArr = setCurrentMedia(ratedTV);
        }
        return mediaArr;
    }
    const changePages = (e) => {
        const id = e.target.id;
        if(id === 'prev') {
            setPage(page === 1 ? 1 : page - 1);
        } else if(id === 'next') {
            setPage(page === Math.ceil(currentMedia.length/12) ? page : page + 1);
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
                    <Link to={'/'} onClick={() => dispatch(logOut('public'))}>Log Out</Link>
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
                <div className="profile-media-wrapper" onClick={deleteItem}>

                {renderMedia(currentMediaString, currentMedia, page)}
                    
                </div>
            </section>
            <section className="profile-btn-container" onClick={changePages}>
                <button id="prev" className="prev-profile">Previous</button> Page {page}
                <button id="next" className="next-profile">Next</button>
            </section>
            </div>
        </div>
    );
}

export default Profile;