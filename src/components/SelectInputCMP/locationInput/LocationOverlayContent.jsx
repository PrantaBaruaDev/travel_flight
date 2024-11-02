import React, { useState } from "react";
import SearchIcon from "src/assets/search.svg?react";
import PlainIcon from "src/assets/plane.svg?react";

const LocationOverlayContent = (props) => {
    const [location, setLocation] = useState(props.location);
    const [selectData, setSelectData] = useState({});


    const handleSelection = (item) => {
        setSelectData({
            city: item.city,
            country: item.country,
            airport_name: item.airport_name,
        });
    };
console.log("Show Selection data: ", selectData);

    return (
        <div ref={props.overlayRef} className="overlay-styles w-80">
            <div className="bg-white drop-shadow-2xl py-2 rounded-xl">
                <div className="flex align-middle px-5 py-2 border-b-2 border-b-gray-400 text-black">
                    <div className="w-5 text-red-500 m-0 mr-3">
                        <SearchIcon className="fill-current" />
                    </div>
                    <input
                        type="text"
                        placeholder="Type for the airport name or airport code"
                        className="search-form w-full focus:outline-none placeholder:text-xs"
                    />
                </div>

                <div className="search-input-container text-gray-600">
                    {/* This item part is loops */}
                    
                    {location && 
                    location.map((item, index) => (
                        <div key={index} className="item px-3 py-2 flex cursor-pointer justify-between align-middle items-center hover:bg-slate-100"
                            onClick={() => handleSelection(item)}
                        >
                            <div className="flex items-center">
                                <div className="icon w-5 text-sm text-red-500 mr-3">
                                    <PlainIcon className="fill-current" />
                                </div>
                                <div className="ms-1 p-0 text-left">
                                    <p className="font-bold">
                                        {item.city}, {item.country}
                                    </p>
                                    <p className="text-xs">
                                        {item.airport_name}
                                    </p>
                                </div>
                            </div>
                            <p>{item.airport_code}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LocationOverlayContent;
