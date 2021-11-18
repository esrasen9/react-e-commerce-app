import React from 'react';
import ProductRating from "./ProductRating";
import ".//ProductCard.css";
import {useStateValue} from "../../context/Context";

const ProductCard = ({id,image,title,price,rating}) => {
    const [initialState,dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({type: "ADD_TO_CART",
            payload: {
                id,
                title,
                image,
                price,
                rating
        }});
        dispatch({
            type: "SET_SUBTOTAL"
        })
    }
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image}
                     alt="product"/>
            </div>
           <div className="product-details">
               <div className="product-description">
                   <p>{title}</p>
               </div>
               <ProductRating rating={rating} numReviews={3000}/>
               <div className="product-price">
                   ${price}
               </div>
           </div>
            <button onClick={addToCart} className="button">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;