import React, {useState} from 'react';
import {useStateValue} from "../../../context/Context";
import CartProducts from "./CartProducts";

const CartLeftSide = () => {
    const [initialState,dispatch] = useStateValue();
    const [code,setCode] = useState("");
    const {discountCode} = initialState;

    const applyDiscountCode = () => {
        if(code === discountCode){
            dispatch({
                type: "SET_DISCOUNTED_SUBTOTAL"
            });
        }
        else {
            alert("Invalid discount code!")
        }
        setCode("");
    }
    return (
        <div className="cart-left-side">
            <div>
                <img
                    className="cart-ad-img"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EarlyBlackFriday/LandingPage/BFCM21_Phase2_EBF_hero_banner_short_desktop_1500x150.gif" alt=""/>
            </div>
            <CartProducts />
            <div className="cart-discount-input">
                <input
                    placeholder="Enter your discount code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    id="discount"
                    type="text"/>
                <button onClick={ applyDiscountCode}>Apply</button>
            </div>
        </div>
    );
}

export default CartLeftSide;