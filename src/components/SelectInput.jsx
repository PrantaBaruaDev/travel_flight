import React, { useEffect, useRef, useState } from "react";
import { toggleOverlay, handleClickOutside } from "src/utils/utilsButtonInput";
import SelectButton from "./SelectComp/SelectButton";
import Overlay from "./SelectComp/Overlay";
import Location from 'src/data/location.json';

const SelectInput = (props) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isActive, setActive] = useState(false);
    const overlayRef = useRef(null);
    const buttonRef = useRef(null);

    const [selectData, setSelectData] = useState({
        value: Location[0].city,
        smvalue: Location[0].airport_name,
    });
    const [location, setLocation] = useState(Location);

    const handleSelection = (item) => {
        setSelectData({
            value: item.city,
            smvalue: item.airport_name,
        });
        setOverlayVisible(false);
        setActive(false);
    };

    // Set up the event listener for clicks outside the overlay
    useEffect(() => {
        const handleOutsideClick = (event) => 
            handleClickOutside(event, overlayRef, buttonRef, setOverlayVisible, setActive);

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
<<<<<<< HEAD
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
=======
        <div className="field-wrapper">
            <SelectButton
                label={props.label}
                selectData={selectData}
                isActive={isActive}
                onClick={() => toggleOverlay(setOverlayVisible, setActive)}
                buttonRef={buttonRef}
                style={props.style}
            />
>>>>>>> 65d6334d46a50bdcd8347bb5ef22f405f7f5600e

            {isOverlayVisible && (
                <Overlay
                    data={location}
                    overlayRef={overlayRef}
                    handleSelection={(item) => handleSelection(item, setSelectData, setOverlayVisible, setActive)}
                />
            )}
        </div>
    );
};

export default SelectInput;
