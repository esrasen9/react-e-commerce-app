import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import HomeIframeRow from "./HomeIframeRow";
import HomeProductsRow from "./HomeProductsRow";
import CarouselItem from "../CarouselItem";
const Home = () => {
    return (
        <div className="page home-page">
            <CarouselItem />
            <div className="route-tr-link">
                <span>You are on amazon.com. You can also shop on Amazon Turkey for millions of products with fast local delivery.</span>
                <Link to={{ pathname: "https://www.amazon.com.tr/?ref=aisgw_intl_stripe_tr" }} target="_blank">
                    Click here to go to amazon.com.tr
                </Link>
            </div>
            <div>
                <div className="home-body">
                    <HomeProductsRow />
                    <HomeIframeRow />
                    <HomeProductsRow />
                </div>
            </div>
        </div>
    );
}

export default Home;