import React, { useState } from "react";
import DownArrow from "src/assets/downarrow.svg?react";
import FlightDetailsOverlay from "./flight_details/FlightDetailsOverlay";

const FlightDetails = () => {
    const [dropdown, setDropdown] = useState(false);
    const [data, setData] = useState({
        alname: "Biman Bangladesh Airlines",
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

    const toggleDropDown = () => {
        setDropdown((prev) => !prev);
    };

    return (
        <div className="card bg-base-100 shadow-xl px-4 pb-6 pt-4">
            <div className="flight-details text-start">
                <div className="grid grid-flow-row-dense grid-cols-6 grid-rows-subgrid gap-5">
                    <div className="text-start">
                        <figure>
                            <img
                                className="w-[80px] rounded-full"
                                src="https://img.favpng.com/9/17/22/airplane-aircraft-aviation-logo-poster-png-favpng-J9PdkddGmnqazCTzCA1RjDaLP.jpg"
                                alt="Movie"
                            />
                        </figure>
                        <p className="text-xs">{data.alname}</p>
                    </div>

                    <div className="depart">
                        <p className="text-xs text-gray-600">Depart</p>
                        <p className="text-base font-bold">
                            {data.flightDepart.time}
                        </p>
                        <p className="text-xs font-medium">{data.flightDepart.date}</p>
                        <p className="text-sm font-medium">
                            {`${data.flightDepart.city} ${data.flightDepart.code}`}
                        </p>
                    </div>
                    <div className="duration">
                        <p className="text-sm">17 hours 55 minutes</p>
                        <div className="arrow-line">
                            <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                        <p className="text-sm">1 Stop via Dhaka</p>
                    </div>

                    <div className="arive">
                        <p className="text-xs text-gray-600">Arive</p>
                        <p className="text-base font-bold">
                            {data.flightArive.time}
                        </p>
                        <p className="text-xs font-medium">{data.flightArive.date}</p>
                        <p className="text-sm font-medium">
                            {`${data.flightArive.city} ${data.flightArive.code}`}
                        </p>
                    </div>
                    
                    <div className="price">
                        <p className="text-xs text-gray-600">Depart</p>
                        <p className="text-base font-bold">
                            {`BDT ${data.price}`}
                        </p>
                    </div>

                    <div className="text-end">
                        <button
                            className="btn bg-primary w-[110px] text-white text-sm hover:border-teal-700 hover:bg-white hover:text-teal-700"
                            type="button"
                        >
                            Book Now
                        </button>
                    </div>
                </div>

                <div className="flex justify-between">
                    {data.parref && (
                        <span className="text-xs text-green-600 font-bold">
                            Partially Refundable
                        </span>
                    )}

                    <button
                        className="flex text-primary font-bold"
                        type="button"
                        onClick={toggleDropDown}
                    >
                        Flight Details
                        <DownArrow
                            className={`fill-current w-5 ml-2 ${
                                dropdown && "rotate-180"
                            }`}
                        />
                    </button>
                </div>
            </div>
            {
                dropdown &&
                <div className="flight-details-overlay">
                    <FlightDetailsOverlay data={data} />
                </div>
            }
        </div>
    );
};

export default FlightDetails;
