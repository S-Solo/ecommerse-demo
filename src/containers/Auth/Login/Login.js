import React from 'react';

import Button from '../../../component/Button/Button';
import Input from '../../../component/Input/Input';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Input />
                <Input />
                <Button>
                    Button
                </Button>
            </div>
        )
    }
}

export default Login;
