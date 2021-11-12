import React from 'react';
import {useStateValue} from "../../../context/Context";

const CartRightSide = () => {
    const [initialState] = useStateValue();
    const subtotal = initialState.cart.reduce((acc,product) => {
        return acc + product.price;
    },0)
    return (
        <div className="cart-right-side">
            <div className="checkout">
                <p>Subtotal ({initialState.cart.length} items): ${subtotal}</p>
                <div><input type="checkbox"/> This order contains a gift</div>
                <button className="checkout-button">Proceed to checkout</button>
            </div>
        </div>
    );
}

export default CartRightSide;