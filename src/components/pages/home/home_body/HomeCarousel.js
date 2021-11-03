import React from 'react';
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const HomeCarousel = () => {
    styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;
    return (
        <Carousel className="home-carousel" easing="ease" fullscreen>
            <div className="each-slide">
                <img
                    alt="carousel1"
                    src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
            </div>
            <div className="each-slide">
                <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                     alt="carousel2"/>
            </div>
            <div className="each-slide">
                <img
                    alt="carousel3"
                    src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" />
            </div>
            <div className="each-slide">
                <img
                    alt="carousel4"
                    src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
            </div>
        </Carousel>
    );
}

export default HomeCarousel;