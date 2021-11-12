import React from 'react';
import CartProduct from "./CartProduct";
import {useStateValue} from "../../../context/Context";

const CartLeftSide = () => {
    const [initialState] = useStateValue();

    return (
        <div className="cart-left-side">
            <div>
                <img
                    className="cart-ad-img"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EarlyBlackFriday/LandingPage/BFCM21_Phase2_EBF_hero_banner_short_desktop_1500x150.gif" alt=""/>
            </div>
            <div>
                <h1 className="cart-title">Your shopping basket</h1>
                <div className="cart-products">
                    {
                        initialState.cart && initialState.cart.map((product,index) =>{
                            return(
                                <CartProduct
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CartLeftSide;