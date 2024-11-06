import React, { useState } from "react";
import SelectInput from "src/components/SelectInput";
import DatePicker from "src/components/DatePickupInput";
// import LocationButtonContent from "src/components/SelectInputCMP/locationInput/LocationButtonContent";
// import LocationOverlayContent from "src/components/SelectInputCMP/locationInput/LocationOverlayContent";
import planeim from 'src/assets/simpleplane.jpg';
import Navbar from "../../components/navbar";
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
        ]
    });

    return (
        <div>
        <Navbar/>
        <div className="herosection pt-5 rounded-xl" 
        style={{
           
            backgroundImage: `url(${planeim})`,
            backgroundSize: '100% 100%', // Forces the image to stretch and cover the div exactly
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '400px',
            width: '1210px'
            }}
            >
            {/* <h1 className="text-6xl">Home page</h1> */}
        
            {/* <HomeHero /> */}
            <SelectInput label={"From"} />
            <Traveler label={"Travelers & Booking Class"} />
            <DatePicker />
            
            {/* <SelectInput
                buttonContent={<LocationButtonContent buttondata={data.buttondata[0]} />}
                overlayContent={<LocationOverlayContent location={data.location} />}
            />

            <SelectInput
                buttonContent={<LocationButtonContent buttondata={data.buttondata[1]} />}
                overlayContent={<LocationOverlayContent location={data.location} />}
            /> */}
            <DatePicker />
        </div>
       
        </div>
    );
};

export default HomeHero;
