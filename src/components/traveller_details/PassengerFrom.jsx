import React from "react";
import ImportentIcon from "src/assets/importent.svg?react";

const PassengerFrom = () => {
    const SelectType = (label) => {
        return (
            <div className="my-4">
                <input
                    type="radio"
                    name="select_title"
                    id={`for${label}`}
                    className="hidden peer"
                />
                <label
                    htmlFor={`for${label}`}
                    className="bg-white border rounded-lg px-2 py-2 w-fit peer-checked:bg-red-500 peer-checked:text-white cursor-pointer"
                >
                    <span>{label}</span>
                </label>
            </div>
        );
    };

    const InputField = (label, type, requaire, optional) => {
        return (
            <label className="form-control w-full">
                <div className="flex justify-start items-center gap-2">
                    <p className="font-medium">
                        {label}{" "}
                        {requaire === true ? (
                            <span className="text-red-600">*</span>
                        ) : (
                            ""
                        )}
                    </p>

                    {optional === true ? (
                        <p className="font-medium">(Optional)</p>
                    ) : (
                        ""
                    )}
                </div>
                <input
                    type={type}
                    placeholder={label}
                    className="input input-bordered w-full"
                />
            </label>
        );
    };

    return (
        <div className="text-start bg-white rounded-lg py-6 shadow-xl">
            <div className="passenger-type flex items-center gap-5 px-5 py-4">
                <h1 className="text-2xl font-semibold">Traveler 1</h1>
                <div className="bg-blue-300 px-4 py-1 rounded">
                    <p className="text-sm">Adult</p>
                </div>
                <p className="text-lg">Primary</p>
            </div>

            <hr className="my-4" />

            <div className="px-4 py-1">
                <h1 className="text-2xl font-semibold">
                    Personal Details (Adult)
                </h1>

                <div className="flex items-center gap-1 mt-4">
                    <ImportentIcon />
                    <p>
                        As mentioned on your passport or government approved IDs
                    </p>
                </div>

                <p className="mt-5">
                    Select Title <span className="text-red-600">*</span>
                </p>
                <div className="flex gap-2">
                    {SelectType("Mr")}
                    {SelectType("Mrs")}
                    {SelectType("Ms")}
                </div>

                <div action="" className="grid grid-flow-row grid-cols-2 gap-4">
                    {InputField("First Name", "text", true)}
                    {InputField("Last Name", "text", true)}
                    {InputField("Date Of Birth", "date", true)}
                    {InputField("Passport Number", "text", false, true)}
                    {InputField("Passport Expiry Date", "text", false, true)}
                    {InputField("Country", "text", true)}
                </div>

                <h1 className="text-2xl mt-4 font-semibold">Contact Details</h1>

                <div className="flex items-center gap-1 mt-4">
                    <ImportentIcon />
                    <p>Receive booking confirmation & updates</p>
                </div>

                <div action="" className="grid grid-flow-row grid-cols-2 gap-4">
                    {InputField("Email", "email", true)}

                    <label className="form-control w-full">
                        <div className="flex justify-start items-center gap-2">
                            <p className="font-medium">
                                Contact Number{" "}
                                <span className="text-red-600">*</span>
                            </p>
                        </div>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>

                            <input
                                type="text"
                                className="grow"
                                placeholder="Username"
                            />
                        </label>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PassengerFrom;
