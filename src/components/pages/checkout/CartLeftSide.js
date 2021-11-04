import React from 'react';
import CartProduct from "./CartProduct";

const CartLeftSide = () => {
    return (
        <div>
            <div>
                <img
                    className="cart-ad-img"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EarlyBlackFriday/LandingPage/BFCM21_Phase2_EBF_hero_banner_short_desktop_1500x150.gif" alt=""/>
            </div>
            <div>
                <h1 className="cart-title">Your shopping basket</h1>
                <div className="cart-products">
                    <CartProduct
                        title="Product1"
                        image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                        price={90.49}
                    />
                    <CartProduct
                        title="Product2"
                        image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                        price={29.49}
                    />
                    <CartProduct
                        title="Product3"
                        image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                        price={60.49}
                    />
                </div>
            </div>
        </div>
    );
}

export default CartLeftSide;