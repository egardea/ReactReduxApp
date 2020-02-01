import React from 'react'

import './Footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <div>
            <h1>FLIX</h1>
            <p>© Erik Gardea</p>
            <p><a target="_blank" href="http://erikgardea.live" >Erik Gardea Portfolio</a></p>
            </div>
            <div>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png" alt="TMDB logo" />
            </div>
            <div>
                <p><a target="_blank" href="https://www.themoviedb.org/documentation/api">API Docs</a></p>
                <p><a target="_blank" href="https://www.facebook.com/themoviedb">Follow TMDB on Facebook</a></p>
                <p><a target="_blank" href="https://twitter.com/themoviedb">Follow TMDB on Twitter</a></p>
            </div>
        </div>
    )
}
export default Footer;
