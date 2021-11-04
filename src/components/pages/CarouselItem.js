import React from 'react';
import styled from "styled-components";
import {Carousel} from 'react-bootstrap';

const CarouselItem = () => {
    styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;
    return (

        <Carousel className="home-carousel" variant="dark">
            <Carousel.Item className="each-slide">
                <img
                    className="d-block w-100"
                    alt="carousel1"
                    src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
            </Carousel.Item>
            <Carousel.Item className="each-slide">
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                    alt="carousel2"/>
            </Carousel.Item>
            <Carousel.Item className="each-slide">
                <img
                    className="d-block w-100"
                    alt="carousel3"
                    src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" />
            </Carousel.Item>
            <Carousel.Item className="each-slide">
                <img
                    className="d-block w-100"
                    alt="carousel4"
                    src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselItem;