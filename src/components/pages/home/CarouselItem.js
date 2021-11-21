import React from 'react';
import styled from "styled-components";
import {Carousel} from 'react-bootstrap';
import {images} from "./carouselImages";

const CarouselItem = () => {
    styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;
    return (

        <Carousel className="home-carousel" variant="dark">
            {
                images.map((image,index) => (
                    <Carousel.Item key={index} className="each-slide">
                        <img
                            className="d-block w-100"
                            alt={image.alt}
                            src={image.imageSource}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default CarouselItem;