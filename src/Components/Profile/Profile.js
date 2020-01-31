import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {

    toggleMediaBtn = (e) => {
        const mediaButtons = document.querySelectorAll('.profile-btn');
        const element = e.target.innerText;
        if(e.target.tagName === 'BUTTON') {
            mediaButtons.forEach((cur, i) => {
                cur = cur.className === 'profile-btn active-btn' ? cur.classList.remove('active-btn') : '';
            });
            mediaButtons.forEach((cur, i) => {
                cur = cur.innerText === element ? cur.classList.add('active-btn') : '';
            });
        }
    }
    render() {
        return (
            <div id="profile-container">
                <section className="profile-nav-container">
                    <div>
                        <figure>
                            <img src={'https://png2.cleanpng.com/sh/2766aa268cfa95394a6057258759ef78/L0KzQYm3VcIyN5R6R91yc4Pzfri0gB9ueKZ5feQ2aXPyfsS0lgNmel51itHvaXzoPbL9ggRiel5ritd3Y3iwgLb2kPxmNWZnSKUBNXW4QrftWPM3Nmg2TKg7MEe2QYa5Vsk1QWQ5UaMENkWxgLBu/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e52ff8c6.7146207315269493491965.png'} alt={''} /> 
                        </figure>
                        <p>Guest</p>
                        <a href={'/'}>Log Out</a>
                    </div>
                    <div className="toggle-btn-container" onClick={this.toggleMediaBtn}>
                        <button className='profile-btn active-btn'>Favorite Movies</button>
                        <button className='profile-btn'>Favorite TV</button>
                        <button className='profile-btn'>Rated Movies</button>
                        <button className='profile-btn'>Rated TV</button>
                    </div>
                </section>
                <section className="profile-media-container">
                    <h1>Favorite Movies</h1>
                    <div className="profile-media-wrapper">

                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY879_.jpg`} alt={''} />
                            </figure>
                            <div>
                                <h4>Movie title Here ot goes to something for toadayt</h4>
                                <p>Genre</p>
                            </div>
                        </Link>
                        
                    </div>
                    
                </section>
                <div className="profile-btn-container">
                        <button className="prev-profile">Previous</button>
                        <button className="next-profile">Next</button>
                    </div>
            </div>
        )
    }
}
export default Profile;