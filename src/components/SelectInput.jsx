import React, { useEffect, useRef, useState } from "react";

const SelectInput = (props) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isActive, setActive] = useState(false);
    const overlayRef = useRef(null);
    const buttonRef = useRef(null);

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
        <div className="field-wrapper">
            <div
                ref={buttonRef}
                className={`search-input-button text-gray-600 border-gray-200 border rounded-xl w-fit pl-5 pr-5 py-3 cursor-pointer ${
                    isActive ? "bg-gray-100" : ""
                } ${props.style && props.style}`}
                onClick={toggleOverlay}
                onMouseDown={handleMouseDown}
            >
                {/* Content part start */}
                {props.buttonContent}
                {/* Content part end */}
            </div>
            {isOverlayVisible && 
                <div ref={overlayRef} className="overlay-styles w-80">
                    <div className="bg-white drop-shadow-2xl py-2 rounded-xl">
                        {/* Overlay part start */}
                        {props.overlayContent}
                        {/* Overlay part end */}
                    </div>
                </div>
            }
        </div>
    );
};

export default SelectInput;
