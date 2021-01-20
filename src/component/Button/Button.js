import React from 'react';

import './Button.scss';

const Button = ({ onClick, children, className }) => {

    return (
        <button onClick={onClick} className={`app-button ${className}`}>
            {children}
        </button>
    )
}

export default Button;
