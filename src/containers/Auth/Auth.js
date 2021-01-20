import React, { Component } from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

// const Auth = () => {
//     const [isLogin, setIsLogin] = useState(true); // React hook v16.8

//     const toggleView = () => {
//         setIsLogin(!isLogin);
//     }

//     return (
//         <div>
//             <span onClick={toggleView}>Go to {isLogin ? 'Signup' : 'Login'}</span>
//             {isLogin ?
//                 <Login />
//                 :
//                 <Signup />
//             }
//         </div>
//     )
// }

// export default Auth;


class AuthClass extends Component {
    constructor() {
        super();
        // this.toggleView = this.toggleView.bind(this);

        this.state = {
            isLogin: true
        }
    }

    toggleView() {
        this.setState({
            isLogin: !this.state.isLogin
        })
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


