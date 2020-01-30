import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {
    render() {
        return (
            <div id="profile-container">
                <section className="profile-nav-container">
                    <div>
                        <figure>
                            <img src={''} alt={''} /> 
                        </figure>
                        <p>Name goes here</p>
                        <a href={'/'}>Log Out</a>
                    </div>
                    <div>
                        <button className='profile-btn active-btn'>Favorite Movies</button>
                        <button className='profile-btn'>Favorite TV</button>
                        <button className='profile-btn'>Rated Movies</button>
                        <button className='profile-btn'>Favorite TV</button>
                    </div>
                </section>
                <section className="profile-media-container">
                    <h1>Favorite Movies</h1>
                    <div className="profile-media-wrapper">

                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        <Link to={`/details/${''}/${''}`} key={''} className="profile-slide">
                            <span><FontAwesomeIcon icon={faStar} /> 2.3</span>
                            <figure className="profile-figure">
                                <img src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=768:*`} alt={''} />
                                </figure>
                            <h4>Movie title</h4>
                            <p>Genre</p>
                        </Link>
                        
                    </div>
                    
                </section>
                <div className="profile-btn-container">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
            </div>
        )
    }
}
export default Profile;