import React from "react";

const backupovelay = () => {
    const upersection = () => {
        <div className="p-0 m-0 text-start ">
            <p>From</p>
            <input
                type="text"
                className="focus:outline-none font-bold cursor-pointer bg-transparent"
                value={"Dhaka"}
                readOnly
            />
            <div>
                <small>
                    <span>Hazrat Shahjalal International Airport</span>
                </small>
            </div>
        </div>;
    };

    const selectLocation = () => {
        <>
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
                <div className="item px-3 py-2 flex cursor-pointer justify-between align-middle items-center hover:bg-slate-100">
                    <div className="flex items-center">
                        <div className="icon w-5 text-sm text-red-500 mr-3">
                            <PlainIcon className="fill-current" />
                        </div>
                        <div className="ms-1 p-0 text-left">
                            <p className="font-bold">Dhaka, Bangladesh</p>
                            <p className="text-xs">
                                Hazrat Shahjalal International Airport
                            </p>
                        </div>
                    </div>
                    <p>DAC</p>
                </div>
            </div>
        </>;
    };
};

export default backupovelay;
