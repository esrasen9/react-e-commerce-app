import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import ProductCard from "../product/ProductCard";
const Home = () => {
    return (
        <div className="home-page">
            <div>
                <div className="home-image">
                    <img
                        className="home-image"
                        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                        alt="Today's deals"/>
                </div>
                <div className="home-body">
                    <div className="route-tr-link">
                        <span>You are on amazon.com. You can also shop on Amazon Turkey for millions of products with fast local delivery.</span>
                        <Link to={{ pathname: "https://www.amazon.com.tr/?ref=aisgw_intl_stripe_tr" }} target="_blank">
                            Click here to go to amazon.com.tr
                        </Link>
                    </div>
                    <div className="home-iframe">
                        <iframe width="560"
                                height="350"
                                src="https://www.youtube.com/embed/6_RRWYw65cY"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                        <div className="iframe-products">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
                    <div className="products">
                        <ProductCard/>
                        <ProductCard/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;