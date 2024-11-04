import React, { useEffect, useRef, useState } from "react";

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

    // Separate states for each category
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [kidsCount, setKidsCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    // Function to toggle overlay visibility
    const toggleOverlay = () => {
        setOverlayVisible((prevState) => !prevState);
        setActive((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
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

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMouseDown = (e) => {
        e.preventDefault();
    };

    // Increment and decrement handlers for each category
    const handleIncrement = (setCount) => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = (setCount) => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <div className="field-wrapper">
            <div
                ref={buttonRef}
                className={`search-input-button text-gray-600 border-gray-200 border rounded-xl w-fit pl-5 pr-5 py-3 cursor-pointer ${
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
                <div ref={overlayRef} className="overlay-styles w-fit">
                    <div className="bg-white drop-shadow-2xl py-2 rounded-xl">
                        <div className="flex align-middle px-5 py-2 border-b-2 border-b-gray-400 text-black">
                            <div className="w-20 text-start text-red-500 m-0 mr-3">
                                <h6>Travelers</h6>
                            </div>
                        </div>
                        <div className="search-input-container text-gray-600 h-80 overflow-y-auto">
                            {/* Adult Section */}
                            <div className="flex align-middle px-5 py-2 border-b-gray-400 text-black">
                                <div className="w-[30px] font-bold text-gray-400 m-0 mr-3">
                                    <h6>Adults</h6>
                                </div>
                            </div>
                            <div className="w-full flex text-left ml-5 -mt-2 ">
                                <h6 className="text-black mr-[27px] font-thin">12 years and above</h6>
                                <button className="btn btn-square ml-4 -mt-6 text-red-600 w-10 h-10" onClick={() => handleIncrement(setAdultCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                                <span className="text-red-600 -mt-4 font-bold text-xl ml-4 mr-4">
                                    {adultCount}
                                </span>
                                <button className="btn btn-square -mt-6 text-red-600 w-10 h-10" onClick={() => handleDecrement(setAdultCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h14"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Repeat for Children, Kids, and Infant Sections with their counters */}
                            <div className="flex align-middle px-5 py-2 border-b-gray-400 text-black">
                                <div className="w-[30px] font-bold text-gray-400 m-0 mr-3">
                                    <h6>Children</h6>
                                </div>
                            </div>
                            <div className="w-full flex text-left ml-5 -mt-2 ">
                                <h6 className="text-black font-thin">5 years - under 12 years</h6>
                                <button className="btn btn-square ml-3 -mt-6 text-red-600 w-10 h-10" onClick={() => handleIncrement(setChildrenCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                                <span className="text-red-600 -mt-4 font-bold text-xl ml-4 mr-4">
                                    {childrenCount}
                                </span>
                                <button className="btn btn-square -mt-6 text-red-600 w-10 h-10" onClick={() => handleDecrement(setChildrenCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h14"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Kids Section */}
                            <div className="flex align-middle px-5 py-2 border-b-gray-400 text-black">
                                <div className="w-[30px] font-bold text-gray-400 m-0 mr-3">
                                    <h6>Kids</h6>
                                </div>
                            </div>
                            <div className="w-full flex text-left ml-5 -mt-2 ">
                                <h6 className="text-black font-thin">2 years - under 5 years</h6>
                                <button className="btn btn-square ml-4 -mt-6 text-red-600 w-10 h-10" onClick={() => handleIncrement(setKidsCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                                <span className="text-red-600 -mt-4 font-bold text-xl ml-4 mr-4">
                                    {kidsCount}
                                </span>
                                <button className="btn btn-square -mt-6 text-red-600 w-10 h-10" onClick={() => handleDecrement(setKidsCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h14"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Infant Section */}
                            <div className="flex align-middle px-5 py-2 border-b-gray-400 text-black">
                                <div className="w-[30px] font-bold text-gray-400 m-0 mr-3">
                                    <h6>Infant</h6>
                                </div>
                            </div>
                            <div className="w-full flex text-left ml-5 -mt-2 ">
                                <h6 className="text-black font-thin mr-[62px]">Below 2 years</h6>
                                <button className="btn btn-square ml-4 -mt-6 text-red-600 w-10 h-10" onClick={() => handleIncrement(setInfantCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                                <span className="text-red-600 -mt-4 font-bold text-xl ml-4 mr-4">
                                    {infantCount}
                                </span>
                                <button className="btn btn-square -mt-6 text-red-600 w-10 h-10" onClick={() => handleDecrement(setInfantCount)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h14"
                                        />
                                    </svg>
                                </button>
                            </div>
  {/* boooooooking class step code */}
                            <div className="bg-white py-2 rounded-xl">
                        <div className="flex align-middle px-5 py-2 border-b-2 border-b-gray-400 text-black">
                            <div className="w-20 flex-1 text-start text-red-500 m-0 mr-3">
                                <h6>Booking class</h6>
                            </div>
                        </div>
                        </div>


                        <div className="flex gap-4 ml-4">
                        <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox border-red-600 bg-red-600 [--chkfg:white] checked:border-red-600"
                        />
                        <h4 className="-ml-3">Economy</h4>
                        <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox border-red-600 bg-red-600 [--chkfg:white] checked:border-red-600"
                        />
                        <h4 className="-ml-3">Premium Economy</h4>
                        </div>

                        <div className="flex gap-4 ml-4 mt-4">
                        <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox border-red-600 bg-red-600 [--chkfg:white] checked:border-red-600"
                        />
                        <h4 className="-ml-3">Business</h4>
                        <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox ml-[5px] border-red-600 bg-red-600 [--chkfg:white] checked:border-red-600"
                        />
                        <h4 className="-ml-3">First Class </h4>
                        </div>




               
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectInput;
