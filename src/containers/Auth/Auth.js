import React, { Component } from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';
class AuthClass extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true
        }
    }

    toggleView = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        return (
            <div>
                <span onClick={this.toggleView.bind(this)}>Go to {this.state.isLogin ? 'Signup' : 'Login'}</span>
                {this.state.isLogin ?
                    <Login title="LOGIN" />
                    :
                    <Signup />
                }
            </div>
        )
    }
}

export default AuthClass;


