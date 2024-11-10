import React, { useState } from "react";
import SelectInput from "src/components/SelectInput";
import DatePicker from "src/components/DatePickupInput";
import planeim from "src/assets/simpleplane.jpg";
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
        <div>
  <div
    className="hero-section h-[550px] sm:h-[550px] xs:h-[850px] lg:h-[490px] mb-8 rounded-xl shadow-xl"
    style={{
        backgroundImage: `url(${planeim})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}
>


                <div className="hero-input w-fit rounded-2xl bg-slate-50/80 mb-5 px-4">
                    {/* <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-5"> */}
                    <form action="" className="flex flex-col items-center">
                    <div className="flex flex-wrap gap-3 ">
                        <SelectInput label={"From"} />
                        <SelectInput label={"To"} />
                        <div className="flex gap-2">
                            <DatePicker label={"Departure"} />
                            <DatePicker label={"Retrun"} />
                        </div>
                        <Traveler label={"Travelers & Booking Class"} />
                    </div>

                    <button type="button" className="btn my-3 px-[5em] text-2xl bg-teal-700 border-0 text-white btn-success">Search</button>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
