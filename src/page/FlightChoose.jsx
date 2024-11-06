import React from "react";
import HomeHero from "src/page/HomeSections/HomeHero";
import FlightDetails from "src/components/flight_details/FlightDetails";

const FlightChoose = () => {
    return (
        <div>
            <HomeHero />
            <div id="flight-choose-root">
                <div className="flex">
                    <div className="w-[360px]">
                        <h1 className="text-[40px]">Filter menu</h1>
                    </div>
                    <div className="grow w-[844px]">
                        <FlightDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightChoose;
