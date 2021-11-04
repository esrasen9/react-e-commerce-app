import React from 'react';

const CartProduct = ({title,image,price}) => {
    return (
        <div className="cart-product">
            <img
                className="cart-product-img"
                src={image}
                alt={title}/>
            <div className="cart-product-detail">
                <h2>{title}</h2>
                <span>${price}</span>
            </div>
        </div>
    );
}

export default CartProduct;