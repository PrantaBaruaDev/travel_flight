import React, { useState } from "react";
import SelectInput from "src/components/SelectInput";
import DatePicker from "src/components/DatePickupInput";
// import LocationButtonContent from "src/components/SelectInputCMP/locationInput/LocationButtonContent";
// import LocationOverlayContent from "src/components/SelectInputCMP/locationInput/LocationOverlayContent";
import Traveler from "src/components/Traveler";

const HomeHero = () => {
    const [data, setData] = useState({
        buttondata: [
            {
                label: "From",
                city: "Dhaka",
                country: "Bangladesh",
                airport_name: "Hazrat Shahjalal International Airport",
            },
            {
                label: "To",
                city: "Chittagong",
                country: "Bangladesh",
                airport_name: "Chittagong International Airport",
            },
        ],

        location: [
            {
                city: "Dhaka",
                country: "Bangladesh",
                airport_name: "Hazrat Shahjalal International Airport",
                airport_code: "DAC",
            },
            {
                city: "Chittagong",
                country: "Bangladesh",
                airport_name: "Cittagong International Airport",
                airport_code: "CAC",
            },
        ],
    });

    return (
        <div className="pt-5">
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <SelectInput label={"From"} />
                <SelectInput label={"To"} />
                <DatePicker label={"Departure"} />
                <DatePicker label={"Retrun"} />
                <Traveler label={"Travelers & Booking Class"} />
            </div>
        </div>
    );
};

export default HomeHero;
