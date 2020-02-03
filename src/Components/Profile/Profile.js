import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {
    state = {
        favMovies: [],
        favTV: [],
        ratedMovies: [],
        ratedTV: [],
        currentMedia: 'Favorite Movies'
    }
    componentDidMount(){
        this.getStorage();
        console.log(this.state.favMovies);
    }
    getStorage = () => {
        const item = Object.entries({...localStorage});
        let toArr = JSON.parse(JSON.stringify(item));
        let arr = [];
        toArr.forEach((cur, i) => {
            arr.push([cur[0].split('-')[0], JSON.parse(cur[1])]);
        });
        arr.forEach((cur, i) => {
            if(cur[0] === 'favMovie') {
                this.state.favMovies.push(cur[1]);
            } else if(cur[0] === 'favTV') {
                this.state.favTV.push(cur[1]);
            } else if(cur[0] === 'ratedMovie') {
                this.state.ratedMovies.push(cur[1]);
            } else if(cur[0] === 'ratedTV') {
                this.state.ratedTV.push(cur[1]);
            }
        });
    }
    toggleMediaBtn = (e) => {
        const mediaButtons = document.querySelectorAll('.profile-btn');
        const element = e.target.innerText;
        this.setState({currentMedia: e.target.innerText}, () => {console.log(this.state.currentMedia)});
        if(e.target.tagName === 'BUTTON') {
            mediaButtons.forEach((cur, i) => {
                cur = cur.className === 'profile-btn active-btn' ? cur.classList.remove('active-btn') : '';
            });
            mediaButtons.forEach((cur, i) => {
                cur = cur.innerText === element ? cur.classList.add('active-btn') : '';
            });
        }
    }

    renderMedia = type => {
        let media;
        if(type === 'Favorite Movies') {
            media = this.state.favMovies > 0 ? this.state.favMovies.map((cur) => (
                <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                <figure className="profile-figure">
                <img src={`https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY879_.jpg`} alt={''} />
                </figure>
                <div>
                    <h4>Movie title Here ot goes to something for toadayt</h4>
                    <p>erik</p>
                </div>
            </Link>
            )): '';
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
                        <p>Welcome Guest</p>
                        <a href={'/'}>Log Out</a>
                    </div>
                    <div className="toggle-btn-container" onClick={this.toggleMediaBtn}>
                        <button className='profile-btn active-btn' name="favMovies">Favorite Movies</button>
                        <button className='profile-btn' name="favTV">Favorite TV</button>
                        <button className='profile-btn' name="ratedMovies">Rated Movies</button>
                        <button className='profile-btn' name="ratedTV">Rated TV</button>
                    </div>
                </section>
                <section className="profile-media-container">
                    <h1>{this.state.currentMedia}</h1>
                    <div className="profile-media-wrapper">

                        {this.renderMedia(this.state.currentMedia)}
                        
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