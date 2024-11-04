import React from "react";
// import HomeHero from "./HomeSections/HomeHero";
import SelectInput from "src/components/SelectInput";
import DatePicker from "src/components/DatePickupInput";
import Navbar from "src/components/Navbar";
import Traveler from "src/components/Traveler";
const Home = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="text-6xl">Home page</h1>
            {/* <HomeHero /> */}
            <SelectInput label={"From"} />
            <Traveler label={"Travelers & Booking Class"} />
            <DatePicker />
            
        </div>
    );
};

export default Home;