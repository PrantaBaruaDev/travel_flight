import React from "react";
import HomeHero from "src/page/HomeSections/HomeHero";
import FlightDetails from "src/components/FlightDetails";

const FlightChoose = () => {
    return (
        <div>
            <h1>Flight Choose page</h1>
            <HomeHero />
            <div className="flex">
                <div className="w-[300px]">
                    <h1 className="text-[40px]">Filter menu</h1>
                </div>
                <div className="grow w-[844px]">
                    <FlightDetails />
                </div>
            </div>
        </div>
    );
};

export default FlightChoose;
