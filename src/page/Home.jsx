import React from "react";
<<<<<<< HEAD
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
            
=======
import HomeHero from "./HomeSections/HomeHero";
import Navbar from "src/components/Navbar";
const Home = () => {
    return (
        <div>
            <h1 className="text-6xl">Home page</h1>
            <Navbar/>
            <HomeHero />
>>>>>>> 65d6334d46a50bdcd8347bb5ef22f405f7f5600e
        </div>
    );
};

export default Home;