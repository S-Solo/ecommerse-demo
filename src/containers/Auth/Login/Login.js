import React from 'react';

import Button from '../../../component/Button/Button';
import Input from '../../../component/Input/Input';

class Login extends React.Component {
    state = {
        name: '',
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Input value={this.state.name} onChange={this.changeHandler} />
                <Input />
                <Button className="login-btn">
                    Button
                </Button>
            </div>
        )
    }
}

export default Login;
