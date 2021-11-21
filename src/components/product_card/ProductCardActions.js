import React, {useEffect, useState} from 'react';
import {useStateValue} from "../../context/Context";
import {FaHeart, FaRegHeart} from "react-icons/all";

const ProductCardActions = ({product}) => {
    const [initialState,dispatch] = useStateValue();
    const [isFavorite,setIsFavorite] = useState(false);
    useEffect(() => {
        (initialState.favorites.find((fav) => fav.id === product.id))
            ? setIsFavorite(true) : setIsFavorite(false);
    },[]);
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });
        dispatch({
            type: "SET_SUBTOTAL"
        })
    }
    const handleAddFav = () => {
        setIsFavorite(true);
        dispatch({
            type: "ADD_FAVORITES",
            payload: product})
    }
    const handleRemoveFav = () => {
        setIsFavorite(false);
        dispatch({
            type: "REMOVE_FAVORITES",
            payload: {
                id: product.id
            }
            });
    }
    return (
        <div className="product-actions">
            <button onClick={addToCart} className="button">
                Add to Cart
            </button>
            {isFavorite ?
                <FaHeart
                    onClick={handleRemoveFav}
                    size={30}
                    color="red"
                    style={{cursor:"pointer"}}/>
                :
                <FaRegHeart
                    onClick={handleAddFav}
                    size={30}
                    style={{cursor:"pointer"}}/>
            }
        </div>
    )
}

export default ProductCardActions;