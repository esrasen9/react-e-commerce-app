import React, {useState} from 'react';
import {Link} from "react-router-dom";
import DiscountCoupon from "./DiscountCoupon";
const HomeIframeRow = () => {
    return (
        <div className="home-iframe-row">
            <iframe
                className="home-iframe"
                src="https://www.youtube.com/embed/6_RRWYw65cY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            <DiscountCoupon/>
            <div>
                <Link to={{ pathname: "https://www.primevideo.com"}}  target="_blank">
                    <img
                        className="iframe-row-img"
                        src="https://m.media-amazon.com/images/G/41/highvelocityevents/og_image/primeday._CB662937150_.png"
                        alt=""/>
                </Link>
            </div>
        </div>
    );
}

export default HomeIframeRow;