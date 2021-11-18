import React from 'react';
import {useStateValue} from "../../../context/Context";
import {useHistory} from "react-router-dom";

const CartRightSide = () => {
    const [initialState] = useStateValue();
    const {subtotal} = initialState;
    const history = useHistory();
    return (
        <div className="cart-right-side">
            <div className="checkout">
                <p>Subtotal ({initialState.cart.length} items): ${subtotal}</p>
                <div><input type="checkbox"/> This order contains a gift</div>
                <button 
                    onClick={() => history.push("/payment")}
                    className="button">Proceed to checkout</button>
            </div>
        </div>
    );
}

export default CartRightSide;