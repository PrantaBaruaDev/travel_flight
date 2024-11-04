import React from "react";
import HomeHero from "./HomeSections/HomeHero";
import Navbar from "src/components/Navbar";
const Home = () => {
    return (
        <div>
            <h1 className="text-6xl">Home page</h1>
            <Navbar/>
            <HomeHero />
        </div>
    );
};

export default Home;