import React from 'react';
import {Link} from "react-router-dom";
const HomeIframeRow = () => {

    return (
        <div className="home-iframe-row">
            <div>
                <Link to={{ pathname: "https://www.primevideo.com"}}  target="_blank">
                    <img
                        className="iframe-row-img"
                        src="https://m.media-amazon.com/images/G/41/highvelocityevents/og_image/primeday._CB662937150_.png"
                        alt=""/>
                </Link>
            </div>
            <iframe
                className="home-iframe"
                src="https://www.youtube.com/embed/6_RRWYw65cY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            <div>
                <img
                    className="iframe-row-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6GGqb4I-obbowncOamSylNSw3LNxQb_SBOEPYC2OwJ_mSawWOC42CmgDCfaMW91rXFY&usqp=CAU"
                    alt=""/>
            </div>
        </div>
    );
}

export default HomeIframeRow;