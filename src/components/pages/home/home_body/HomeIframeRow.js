import React from 'react';
const HomeIframeRow = () => {

    return (
        <div className="home-iframe-row">
            <iframe src="https://www.youtube.com/embed/6_RRWYw65cY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <div>
                <img src="https://m.media-amazon.com/images/G/41/highvelocityevents/og_image/primeday._CB662937150_.png"
                     alt=""/>
            </div>
        </div>
    );
}

export default HomeIframeRow;