import React from "react";
// import HomeHero from "./HomeSections/HomeHero";
import SelectInput from "../components/SelectInput";
// import DatePicker from "src/components/DatePickupInput";
// import Navbar from "src/components/Navbar";
// import Traveler from "src/components/Traveler";
import HomeHero from "./HomeSections/HomeHero";
import Slider from "./HomeSections/slider";

const Home = () => {
    return (
        <div>
           
            {/* <Navbar/>
            <h1 className="text-6xl">Home page</h1>
         */}
            {/* <HomeHero /> */}
            {/* <SelectInput label={"From"} />
            <Traveler label={"Travelers & Booking Class"} />
            <DatePicker /> */}
            <HomeHero></HomeHero>
            <Slider></Slider>
            
        </div>
    );
};

export default Home;