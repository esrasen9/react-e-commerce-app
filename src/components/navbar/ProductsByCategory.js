import React, {useEffect,useState} from 'react';
import ProductCards from "../product_card/ProductCards";
import {getAllProducts} from "../../context/reducer";
import {useStateValue} from "../../context/Context";

const ProductsByCategory = ({category}) => {
    const [initialState,dispatch] = useStateValue();
    const {products} = initialState;
    const [productsByCategory,setProductsByCategory] = useState([]);
    useEffect(() => {
        setProductsByCategory([...products.filter(product => product.category === category)]);
    }, [])
    return (
        <div className="products-by-category">
            <ProductCards products={productsByCategory}/>
        </div>
    )
}

export default ProductsByCategory;