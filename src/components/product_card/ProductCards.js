import React from 'react';
import ProductCard from "./ProductCard";

const ProductCards = ({products}) => {
    return (
        products.map(product => {
                return (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />)
            }
        )
    );
}

export default ProductCards;