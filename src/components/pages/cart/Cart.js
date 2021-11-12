import React from 'react';
import CartLeftSide from "./CartLeftSide";
import CartRightSide from "./CartRightSide";
import "./Cart.css";

const Cart = () => {
    return (
        <div className="cart-page">
            <div className="cart">
                <CartLeftSide />
                <CartRightSide />
            </div>
        </div>
    );
}

export default Cart;