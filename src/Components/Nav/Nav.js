import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Nav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from './flix.png'

class nav extends Component {

    state = { 
        text: '',
    }

    onChange = e => {
        this.setState({text: e.target.value});
    }


    render() {
        return (
            <nav className="nav">
                <div className="nav-icon">
                    <span>
                        <Link to={'/'}>
                        <img src={Logo} alt='logo' />
                        </Link>
                    </span>
                </div>
                <div>
                    <form id="nav_search--form">
                        <input 
                        type="text"
                        name="search"
                        placeholder="Search Flix..."
                        onChange={this.onChange}
                        />
                        <Link to={`/search-result/${this.state.text}`}>
                            <button type="submit" value="submit"><FontAwesomeIcon icon={faSearch}/></button>
                        </Link>
                    </form>
                </div>
                <div className="nav-home">
                    <span>
                        <Link to={'/profile'}>
                        <FontAwesomeIcon icon={faUserCircle} />
                        </Link>
                    </span>
                    <span>
                        <Link to={`/`}>
                        <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </span>
                </div>
            </nav>
        )
    }
}
export default nav;
