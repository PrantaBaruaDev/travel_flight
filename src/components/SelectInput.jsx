import React, { useEffect, useRef, useState } from "react";
import { toggleOverlay, handleClickOutside } from "src/components/functions/utils";
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
        <div className="field-wrapper">
            <SelectButton
                label={props.label}
                selectData={selectData}
                isActive={isActive}
                onClick={() => toggleOverlay(setOverlayVisible, setActive)}
                buttonRef={buttonRef}
                style={props.style}
            />

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
