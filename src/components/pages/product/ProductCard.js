import React from 'react';
import ProductRating from "./ProductRating";
import "../product/ProductCard.css";

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                     alt="product"/>
            </div>
            <div className="product-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, in.</p>
            </div>
            <ProductRating rating={4.5} numReviews={3000}/>
            <div className="product-price">
                $11.99
            </div>
            <button className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;