import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import ProductCard from "../product/ProductCard";
import HomeIframeRow from "./home_body/HomeIframeRow";
import HomeProductsRow from "./home_body/HomeProductsRow";
import HomeCarousel from "./home_body/HomeCarousel";
const Home = () => {
    return (
        <div className="home-page">
            <HomeCarousel />
            <div className="route-tr-link">
                <span>You are on amazon.com. You can also shop on Amazon Turkey for millions of products with fast local delivery.</span>
                <Link to={{ pathname: "https://www.amazon.com.tr/?ref=aisgw_intl_stripe_tr" }} target="_blank">
                    Click here to go to amazon.com.tr
                </Link>
            </div>
            <div>
                <div className="home-body">
                    <HomeIframeRow />
                    <HomeProductsRow />
                </div>
            </div>

        </div>
    );
}

export default Home;