import React from 'react';
import ProductRating from "./ProductRating";
import ".//ProductCard.css";

const ProductCard = ({image,title,price,rating}) => {
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
            <button className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;