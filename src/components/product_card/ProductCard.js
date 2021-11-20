import React, {useEffect, useState} from 'react';
import ProductRating from "./ProductRating";
import ".//ProductCard.css";
import {useStateValue} from "../../context/Context";
import {FaHeart, FaRegHeart} from "react-icons/all";

const ProductCard = ({id,image,title,price,rating}) => {
    const [initialState,dispatch] = useStateValue();
    const [isFavorite,setIsFavorite] = useState(false);
    useEffect(() => {
        (initialState.favorites.find((fav) => fav.id === id))
            ? setIsFavorite(true) : setIsFavorite(false);
    },[]);
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
    const handleAddFav = () => {
        setIsFavorite(true);
        dispatch({type: "ADD_FAVORITES",
            payload: {
                id,
                title,
                image,
                price,
                rating
            }});
    }
    const handleRemoveFav = () => {
        setIsFavorite(false);
        dispatch({type: "REMOVE_FAVORITES",
            payload: {
                id
        }});
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
            <div className="product-actions">
                <button onClick={addToCart} className="button">
                    Add to Cart
                </button>
                {
                    isFavorite ? (<FaHeart
                                        color="red"
                                        onClick={() =>handleRemoveFav}
                                        size="30"/> ): (<FaRegHeart
                                                        onClick={handleAddFav}
                                                        size="30"/>)
                }
            </div>

        </div>
    );
}

export default ProductCard;