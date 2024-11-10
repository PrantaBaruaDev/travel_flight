import React, { useState } from 'react';
import { flightDataContext } from './../../context/context';

const DataContextMaster = ({ children }) => {
    const [ flightData, setFlightData ] = useState({
        alname: "Biman Bangladesh Airlines",
        logo: "https://img.favpng.com/9/17/22/airplane-aircraft-aviation-logo-poster-png-favpng-J9PdkddGmnqazCTzCA1RjDaLP.jpg",
        operate_country: "BG",
        operate_code: "618",
        aircraft: "DHC8 Dash 8",
        flight_class: "Economy (G)",
        available_seat: 3,
        parref: true, // Partially Refundable
        price: "24,775",
        flightDepart: {
            time: "22:35",
            date: "Thu, 31 Oct 2024",
            location: "Patenga",
            city: "Chittagong",
            country: "Bangladesh",
            code: "(CGP)",
            terminal:"-",
        },
        flightArive: {
            time: "16:30",
            date: "Fri, 1 Nov 2024",
            location: "Cox's Bazar",
            city: "Cox's Bazar",
            country: "Bangladesh",
            code: "(CXB)",
            terminal:"-",
        },
        baggage_weight: {
            adult: {
                check_in: "20",
                cabin: "7"
            },
            children: {
                check_in: "20",
                cabin: "7"
            },
            infant: {
                check_in: "20",
                cabin: "7"
            },
        }
    });

    return (
        <flightDataContext.Provider value={flightData} children={children} />
    );
};

export default DataContextMaster;