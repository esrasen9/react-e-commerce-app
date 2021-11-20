import React from 'react';
import "./Favorites.css";
import {useStateValue} from "../../../context/Context";
import ProductCard from "../../product_card/ProductCard";

const Favorites = () => {
    const [initialState] = useStateValue();
    return (
        <div>
            {
                initialState.favorites.map(fav => {
                    const {id,title,image,price,rating} = fav;
                    return (<ProductCard
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                        rating={rating}
                    />)
                })
            }
        </div>
    );
}

export default Favorites;