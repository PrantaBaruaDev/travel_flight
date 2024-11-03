import React from "react";
import SearchIcon from "src/assets/search.svg?react";
import OverlayItem from "./LoationOverlayItem";

const Overlay = ({ data, overlayRef, handleSelection }) => {
    return (
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
                    {data.map((item, index) => (
                        <OverlayItem key={index} item={item} onSelect={() => handleSelection(item)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Overlay;
