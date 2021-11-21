import React from 'react';
import ProductCard from "./ProductCard";

const ProductCards = ({products}) => {
    return (
        products.map(product => {
                const {id, title, image, price, rating} = product;
                return (
                    <ProductCard
                        key={id}
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                        rating={rating.rate}
                        numReviews={rating.count}
                    />)
            }
        )
    );
}

export default ProductCards;