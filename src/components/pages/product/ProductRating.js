import React from 'react';
import {getStars} from "./rating_methods";
const ProductRating = ({rating,numReviews}) => {
    return (
        <div className="product-rating">
            <div className="product-stars">
                {
                    getStars(rating).map((Star,index) =><span key={index}><Star/></span> )
                }
            </div>
            <p className="product-review">{numReviews} reviews</p>
        </div>
    );
}

export default ProductRating;