import React, { Component } from 'react'

import './Nav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

class nav extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav-icon">
                    <span>
                        Flix
                    </span>
                </div>
                <div>
                    <form id="nav_search--form">
                        <input 
                        type="text"
                        name="search"
                        placeholder="Search Flix..."
                        />
                        <button type="submit" value="submit"><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                </div>
                <div className="nav-home">
                    <span>
                        <FontAwesomeIcon icon={faHome} />
                    </span>
                </div>
            </nav>
        )
    }
}
export default nav;
