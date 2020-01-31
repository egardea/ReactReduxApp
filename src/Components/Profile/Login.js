import React, { Component } from 'react'

import './Profile.css';

class Login extends Component {
    render() {
        return (
            <div id="login-container">
                <div className='login-wrapper'>
                    <h1>Login</h1>
                    <input placeholder="Email" />
                    <input placeholder="Password" />
                    <button>Login</button>
                    <div></div>
                    <button>Guest Login</button>
                </div>
            </div>
        )
    }
}
export default Login;
