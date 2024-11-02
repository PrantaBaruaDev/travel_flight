import React, { useState } from "react";
import SelectInput from "src/components/SelectInput";
import DatePicker from "src/components/SelectInputCMP/dateinput/DatePicker";
import LocationButtonContent from "src/components/SelectInputCMP/locationInput/LocationButtonContent";
import LocationOverlayContent from "src/components/SelectInputCMP/locationInput/LocationOverlayContent";

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
        ]
    });

    return (
        <div className="pt-5">
            <SelectInput
                buttonContent={<LocationButtonContent buttondata={data.buttondata[0]} />}
                overlayContent={<LocationOverlayContent location={data.location} />}
            />

            <SelectInput
                buttonContent={<LocationButtonContent buttondata={data.buttondata[1]} />}
                overlayContent={<LocationOverlayContent location={data.location} />}
            />
            <DatePicker />
        </div>
    );
};

export default HomeHero;
