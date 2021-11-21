import React from 'react';
import {useStateValue} from "../../../context/Context";
import ProductCards from "../../product_card/ProductCards";

const HomeProductsRow = () => {
    const [initialState] = useStateValue();
    return (
        <div className="home-products-row">
            <ProductCards products={initialState.products}/>
        </div>
    );
}

export default HomeProductsRow;