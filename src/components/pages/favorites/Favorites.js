import React from 'react';
import "./Favorites.css";
import {useStateValue} from "../../../context/Context";
import ProductCards from "../../product_card/ProductCards";

const Favorites = () => {
    const [initialState] = useStateValue();
    return (
        <div>
            <div className="fav-title">
                <h1>Your Favorites</h1>
            </div>
           <div className="fav-products">
               <ProductCards products={initialState.favorites}/>
           </div>
        </div>
    );
}

export default Favorites;