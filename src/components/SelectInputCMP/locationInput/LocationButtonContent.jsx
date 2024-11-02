import React, { useState } from "react";

const LocationButtonContent = (props) => {
    const [buttonData, setButtonData] = useState(props.buttondata);

    return (
        <div className="p-0 m-0 text-start">
            <p>{buttonData.label}</p>
            <input
                type="text"
                className="focus:outline-none font-bold cursor-pointer bg-transparent"
                value={`${buttonData.city}, ${buttonData.country}`}
                readOnly
            />
            <div>
                <small>
                    <span>{buttonData.airport_name}</span>
                </small>
            </div>
        </div>
    );
};

export default LocationButtonContent;
