import React from 'react';
import {useStateValue} from "../../../context/Context";

const CartProduct = ({product}) => {
    const {id,title,image,price} = product;
    const [initialState,dispatch] = useStateValue();
    const removeToCart = () => {
        dispatch({type: "REMOVE_TO_CART",payload: id});
        dispatch({type: "SET_SUBTOTAL"})
    }
    return (
        <div className="cart-product">
            <img
                className="cart-product-img"
                src={image}
                alt={title}/>
            <div className="cart-product-detail">
                <div>
                    <h2>{title}</h2>
                    <span>${price}</span>
                </div>
                <button
                    onClick={removeToCart}
                    className="button">
                    Remove from cart
                </button>
            </div>
        </div>
    );
}

export default CartProduct;
