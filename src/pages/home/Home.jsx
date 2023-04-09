import React from 'react';
import HomeBanner from "./banner/HomeBanner";
import Trending from "./trending/Trending";
import "./home.scss";

function Home(props) {
    return (
        <div className="homePage">
            <HomeBanner />
            <Trending />
        </div>
    );
}

export default Home;