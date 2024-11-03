import React from "react";
// import HomeHero from "./HomeSections/HomeHero";
import SelectInput from "src/components/SelectInput";
import DatePicker from "src/components/DatePickupInput";

const Home = () => {
    return (
        <div>
            <h1 className="text-6xl">Home page</h1>
            {/* <HomeHero /> */}
            <SelectInput label={"From"} />
            <DatePicker />
        </div>
    );
};

export default Home;