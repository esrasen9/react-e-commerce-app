import React, {forwardRef} from 'react';
import CartProduct from "./CartProduct";
import {useStateValue} from "../../../context/Context";
import FlipMove from "react-flip-move";

const CartLeftSide = () => {
    const [initialState] = useStateValue();
    /*Functional components have no reference,
    I wrapped the CartProduct component with a div for
    FlipMove to work*/

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
                    <FlipMove>
                        {
                            initialState.cart && initialState.cart.map((product,index) =>{
                                return(
                                    <div>
                                        <CartProduct
                                            id={product.id}
                                            key={index}
                                            title={product.title}
                                            image={product.image}
                                            price={product.price}
                                        />
                                    </div>
                                )
                            })
                        }
                    </FlipMove>
                </div>
            </div>
        </div>
    );
}

export default CartLeftSide;