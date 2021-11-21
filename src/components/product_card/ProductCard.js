import React from 'react';
import ProductRating from "./ProductRating";
import ".//ProductCard.css";
import ProductCardAction from "./ProductCardActions";

const ProductCard = ({product}) => {
    const {title, image, price, rating} = product;

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
               <ProductRating rating={rating.rate} numReviews={rating.count}/>
               <div className="product-price">
                   ${price}
               </div>
           </div>
           <ProductCardAction product={product} />

        </div>
    );
}

export default ProductCard;