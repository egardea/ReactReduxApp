import React, { useState, useEffect } from 'react'
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

import Loader from '../Loader/Loader';

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

    const deleteItem = () => {
        //displays the 'deleted' message onced clicked
        const id = document.getElementById('delete-btn').dataset.id;
        const deletedAlert = document.querySelector('.deleted-alert');
        const alert = () => {
            deletedAlert.classList.remove('deactivate-alert');
            setTimeout(() => {
                deletedAlert.classList.add('deactivate-alert');
            }, 1000);
        }
        //checks for hook state to match the condition for each dispatch action that takes in the ID we want to delete
        //calls the alert
        if(currentMediaString === 'Favorite Movies') {
            dispatch(deleteFavorite(id));
            alert();
        } else if(currentMediaString === 'Favorite TV') {
            dispatch(deleteFavTV(id));
            alert();
        } else if(currentMediaString === 'Rated Movies'){
            dispatch(deleteRatedMovie(id));
            alert();
        } else if(currentMediaString === 'Rated TV'){
            dispatch(deleteRatedTV(id));
            alert();
        }
    }
    const renderMedia = (type, array, pageNum) => {
        //we use splice to only display 12 items at a time
        let media;
        let lastIndex = pageNum * 12;
        let firstIndex = lastIndex -12;
        let newArr = array.slice(firstIndex, lastIndex);
        //returns the media we want to see by checking the state hook
        if(type === 'Favorite Movies') {
            media = newArr.length > 0 ? newArr.map((cur, index) => (
                <div key={cur.id} className="profile-slide">
                    <div id="delete-btn" data-id={cur.id} onClick={deleteItem}>
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
                <div key={cur.id} className="profile-slide">
                    <div id="delete-btn" data-id={cur.id} onClick={deleteItem}>
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
                <div key={cur.id} className="profile-slide">
                    <div id="delete-btn" data-id={cur.id} onClick={deleteItem}>
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
                <div key={cur.id} className="profile-slide">
                    <div id="delete-btn" data-id={cur.id} onClick={deleteItem}>
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
        //toggles the navigation for mobile mode
        e.target.classList.toggle('change');
        e.target.parentNode.classList.toggle('slide-profile-nav-container');
    }
    const mediaButtons = (e) => {
        //handles the styling of the navidation buttons
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
        //sets the page back to one if button is clicked
        setPage(1);
    }

    useEffect(() => {
        let reloadMedia;
        if(currentMediaString === 'Favorite Movies') {
            reloadMedia = favMovies;
        } else if(currentMediaString === 'Favorite TV') {
            reloadMedia = favTV;
        } else if(currentMediaString === 'Rated Movies'){
            reloadMedia = ratedMovie;
        } else if(currentMediaString === 'Rated TV'){
            reloadMedia = ratedTV;
        }
        setCurrentMedia(reloadMedia);
    },[setCurrentMedia, currentMediaString, favMovies, favTV, ratedMovie, ratedTV]);

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
                    <button className='profile-btn active-btn' name="favMovies" onClick={() => setCurrentMedia(favMovies)}>Favorite Movies</button>
                    <button className='profile-btn' name="favTV" onClick={() => setCurrentMedia(favTV)}>Favorite TV</button>
                    <button className='profile-btn' name="ratedMovies" onClick={() => setCurrentMedia(ratedMovie)}>Rated Movies</button>
                    <button className='profile-btn' name="ratedTV" onClick={() => setCurrentMedia(ratedTV)}>Rated TV</button>
                </div>
                <Link to={'/'}>Home</Link>
            </section>
            <div>
            <h1>{currentMediaString}</h1>
            <div className="deleted-alert deactivate-alert"><p>Deleted</p></div>
            <section className="profile-media-container">
                <div className="profile-media-wrapper">
                    
                {renderMedia(currentMediaString, currentMedia, page)}
                    
                </div>
            </section>
            <section className="profile-btn-container">
                <button id="prev" className="prev-profile" onClick={() => setPage(page === 1 ? 1 : page - 1)}>Previous</button> Page {page} of {Math.ceil(currentMedia.length/12)}
                <button id="next" className="next-profile" onClick={() => setPage(page === Math.ceil(currentMedia.length/12) ? page : page + 1)}>Next</button>
            </section>
            </div>
        </div>
    );
}

export default Profile;