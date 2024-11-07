import React from "react";

const FilterAirlines = ({ index, short_name, com_name, ticket_price }) => {
    return (
        <div className="text-start">
            <div className="flex justify-between align-middle">
                <div className="flex items-start gap-3">
                    <input
                        id={`check${index}`}
                        className="mt-1.5"
                        type="checkbox"
                        name={short_name}
                    />
                    <label htmlFor={`check${index}`} className="w-44">
                        <span className="">{com_name}</span>
                    </label>
                </div>
                <p>BDT {ticket_price}</p>
            </div>
        </div>
    );
};

export default FilterAirlines;
