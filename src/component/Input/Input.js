import React from 'react';

import './Input.scss';

const Input = ({ type, value, onChange }) => {
    return (
        <input
            className="app-input"
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;
