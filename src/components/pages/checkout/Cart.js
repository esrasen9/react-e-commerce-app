import React from 'react';
import CartLeftSide from "./CartLeftSide";
import CartRightSide from "./CartRightSide";
import "./Cart.css";

const Cart = () => {
    return (
        <div className="checkout-page">
            <CartLeftSide />
            <CartRightSide />
        </div>
    );
}

export default Cart;