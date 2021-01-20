import React from 'react';

import Product from '../../component/Product/Product';
import Button from '../../component/Button/Button';

import { productsData } from '../../data-mockup/products-mockup';

import './Products.scss';
class Products extends React.Component {
    state = {
        isSelectedIdx: 0
    }

    selectItem = () => {
        if (this.state.isSelectedIdx > productsData.length) {
            return;
        }
        this.setState({ isSelectedIdx: this.state.isSelectedIdx + 1 })
    }

    render() {
        return (
            <div className="app-products">
                <div className="app-products__container">
                    {productsData.map((el, idx) => { // idx 0
                        return <Product
                            key={el.id}
                            title={el.title}
                            description={el.description}
                            price={el.price}
                            isSelected={this.state.isSelectedIdx === idx} // 0 === 0
                        />;
                    })}
                </div>
                <Button onClick={this.selectItem} className="app-products__button">
                    CLick Me
                </Button>
            </div>
        )
    }
}

export default Products
