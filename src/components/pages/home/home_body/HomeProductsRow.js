import React from 'react';
import ProductCard from "../../../product_card/ProductCard";

const HomeProductsRow = () => {
    return (
        <div className="home-products-row">
            <ProductCard
                title="Product1"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={25.99}
                rating={3.5}
            />
            <ProductCard
                title="Product2"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={60.49}
                rating={4.5}
            />
            <ProductCard
                title="Product3"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={12.99}
                rating={5}
            />
            <ProductCard
                title="Product4"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={320.99}
                rating={4.5}
            />
            <ProductCard
                title="Product5"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={15.99}
                rating={2}
            />
            <ProductCard
                title="Product6"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={10.99}
                rating={3}
            />
            <ProductCard
                title="Product7"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={99.99}
                rating={4.5}
            />
            <ProductCard
                title="Product8"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={10.45}
                rating={1}
            />
            <ProductCard
                title="Product9"
                image="https://m.media-amazon.com/images/I/41SlXg-9ENL.jpg"
                price={7.99}
                rating={0}
            />
        </div>
    );
}

export default HomeProductsRow;