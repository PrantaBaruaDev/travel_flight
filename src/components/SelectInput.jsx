    import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "src/assets/search.svg?react";
import PlainIcon from "src/assets/plane.svg?react";
import Location from "src/data/location.json";

const SelectInput = (props) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isActive, setActive] = useState(false);
    const overlayRef = useRef(null);
    const buttonRef = useRef(null);

    const [selectData, setSelectData] = useState({
        city: Location[0].city,
        country: Location[0].country,
        airport_name: Location[0].airport_name,
    });

    const [data, setData] = useState({
        location: Location,
    });

    // Function to toggle overlay visibility
    const toggleOverlay = () => {
        setOverlayVisible((prevState) => !prevState);
        setActive((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        // Check if the clicked target is outside the overlay and button
        if (
            overlayRef.current &&
            !overlayRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setOverlayVisible(false);
            setActive(false);
        }
    };

    const handleSelection = (item) => {
        setSelectData({
            city: item.city,
            country: item.country,
            airport_name: item.airport_name,
        });
        setOverlayVisible(false);
        setActive(false);
    };

    // Set up the event listener for clicks outside the overlay
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMouseDown = (e) => {
        e.preventDefault();
    };

    return (
        <div className="field-wrapper ">
            <div
                ref={buttonRef}
                className={`search-input-button text-gray-600 border-2 rounded-xl w-fit pl-5 pr-5 py-3 cursor-pointer border-teal-700 bg-white ${
                    isActive ? "bg-gray-100" : ""
                } ${props.style && props.style}`}
                onClick={toggleOverlay}
                onMouseDown={handleMouseDown}
            >
                <div className="p-0 m-0 text-start ">
                    <p>{props.label}</p>
                    <input
                        type="text"
                        className="focus:outline-none font-bold cursor-pointer bg-transparent"
                        value={`${selectData.city}, ${selectData.country}`}
                        readOnly
                    />
                    <div>
                        <small>
                            <span>{selectData.airport_name}</span>
                        </small>
                    </div>
                </div>
            </div>

            {isOverlayVisible && (
                <div ref={overlayRef} className="overlay-styles w-80">
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
                        <div className="search-input-container text-gray-600 h-80 overflow-y-auto">
                            {/* This item part is loops */}

                            {data.location &&
                                data.location.map((item, index) => (
                                    <div
                                        key={index}
                                        className="item px-3 py-2 flex cursor-pointer justify-between align-middle items-center hover:bg-slate-100"
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
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectInput;
