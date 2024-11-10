import React, { useEffect, useRef, useState } from "react";
import ImportentIcon from "src/assets/importent.svg?react";
import { handleClickOutside } from "src/utils/utilsButtonInput";
import DownArrowIcon from "src/assets/downarrow.svg?react";

const countries = [
    { value: "+880", label: "Bangladesh", flag: "🇧🇩" },
    { value: "+297", label: "Aruba", flag: "🇦🇼" },
    { value: "+61", label: "Australia", flag: "🇦🇺" },
    { value: "+43", label: "Austria", flag: "🇦🇹" },
    { value: "+994", label: "Azerbaijan", flag: "🇦🇿" },
];

const PassengerFrom = () => {
    const overlayRef = useRef(null);
    const buttonRef = useRef(null);

    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // default country selected value
    const [phoneNumber, setPhoneNumber] = useState(countries[0].value); // default country selected value

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isActive, setActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // Get the contact spacifig code when searching

    // Set up the event listener for clicks outside the overlay
    useEffect(() => {
        // Overlay side click to hide
        const handleOutsideClick = (event) =>
            handleClickOutside(
                event,
                overlayRef,
                buttonRef,
                setDropdownOpen,
                setActive
            );

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [overlayRef, buttonRef]);

    // Contact country code Search Filder
    const filteredCountries = countries.filter((country) =>
        country.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // For contact default input field value can't remove on delete button
    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        // Prevent removal of the country code
        if (inputValue.startsWith(selectedCountry.value)) {
            setPhoneNumber(inputValue);
        } else {
            setPhoneNumber(selectedCountry.value);
        }
    };

    // Select Gender Title (ex: Mr, Mrs, Ms,)
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
                    className="bg-white border rounded-lg px-2 py-2 w-fit peer-checked:bg-teal-700 peer-checked:text-white cursor-pointer"
                >
                    <span>{label}</span>
                </label>
            </div>
        );
    };

    // This is use for Form input field
    const InputField = (label, type, requaire, optional) => {
        return (
            <label className="form-control w-full">
                <div className="flex justify-start items-center gap-2 mb-2">
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
        <div className="text-start bg-white rounded-lg py-10 shadow-xl">
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

                <div className="flex items-center gap-1 my-4">
                    <ImportentIcon />
                    <p>Receive booking confirmation & updates</p>
                </div>

                <div className="grid grid-flow-row grid-cols-2 gap-4 mt-6">
                    {InputField("Email", "email", true)}

                    {/* Contact Start */}
                    <div className="form-control w-full">
                        <div className="flex justify-start items-center gap-2 mb-2">
                            <p className="font-medium">
                                Contact: <span className="text-red-600">*</span>
                            </p>
                        </div>
                        <div className="flex items-center border">

                            {/* Dropdown Button */}
                            <div className="relative">
                                <button
                                    ref={buttonRef}
                                    onClick={() => {
                                        setDropdownOpen(!dropdownOpen);
                                        setActive(!isActive);
                                    }}
                                    className={`flex items-center gap-1 p-2 rounded-s-md bg-white ${
                                        isActive === true ? "bg-slate-300" : ""
                                    }`}
                                >
                                    <span>{selectedCountry.flag}</span>
                                    <DownArrowIcon
                                        className={`fill-current w-3 ml-2`}
                                    />
                                </button>

                                {/* Dropdown Content */}
                                {dropdownOpen && (
                                    <div
                                        ref={overlayRef}
                                        className="absolute z-10 mt-1 w-56 bg-white border rounded-md shadow-lg p-3"
                                    >
                                        {/* Search Field */}
                                        <input
                                            type="text"
                                            className="w-full p-2 border rounded-md mb-2"
                                            placeholder="Search country"
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />

                                        {/* Country List */}
                                        <ul className="max-h-40 overflow-y-auto">
                                            {filteredCountries.map(
                                                (country, index) => (
                                                    <li
                                                        key={`${country.value}-${index}`}
                                                        onClick={() => {
                                                            setSelectedCountry(
                                                                country
                                                            );
                                                            setPhoneNumber(
                                                                country.value
                                                            );
                                                            setDropdownOpen(
                                                                false
                                                            );
                                                            setActive(false);
                                                            setSearchTerm("");
                                                        }}
                                                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                                                    >
                                                        <span>
                                                            {country.flag}
                                                        </span>
                                                        <span>
                                                            {country.label}
                                                        </span>
                                                        <span className="ml-auto text-gray-500">
                                                            {country.value}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Phone Number Input */}
                            <input
                                type="text"
                                className="flex-grow p-2 rounded-e-md input input-bordered"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Contact End */}
                </div>
            </div>
        </div>
    );
};

export default PassengerFrom;
