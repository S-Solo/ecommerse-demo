import React from 'react';

import './Product.scss';

const Product = ({ title, description, price, isSelected }) => { // true
    return (
        <div className={`app-product ${isSelected ? 'app-product--selected' : ''}`}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <span className="label">{price}</span>
        </div>
    )
}

export default Product;
