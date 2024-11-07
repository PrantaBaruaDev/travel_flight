import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import FilterAirlines from "./FilterAirlines";
import FilterDepartTime from "./FilterDepartTime";

const FlightFilter = () => {
    const [data, setData] = useState({ 
        airlines: [
            {
                com_name: "Biman Bangladesh Airlines",
                short_name: "BG",
                ticket_price: "4,118",
            },
            {
                com_name: "US Bangla Airlines",
                short_name: "BS",
                ticket_price: "4,150",
            },
            {
                com_name: "Air Astra",
                short_name: "2A",
                ticket_price: "4,183",
            },
            {
                com_name: "Novo Air",
                short_name: "VQ",
                ticket_price: "4,199",
            },
        ],
    });

    return (
        <div>
            <FilterPrice />

            {/* Departure Section */}
            <FilterDepartTime departure_location={"Dhaka"} />

            {/* Airline Section */}
            <h1 className="text-start text-xl mb-4 font-medium">Airlines</h1>
            {data.airlines &&
                data.airlines.map((item, index) => ( 
                    <FilterAirlines 
                        key={index} 
                        index={index} 
                        short_name={item.short_name} 
                        com_name={item.com_name}
                        ticket_price={item.ticket_price}
                    />
                ))
            }
        </div>
    );
};

export default FlightFilter;
