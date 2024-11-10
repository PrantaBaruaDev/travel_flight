import React, { useState } from "react";
import {
    FaShieldAlt,
    FaCheckCircle,
    FaRegClock,
    FaSuitcase,
} from "react-icons/fa";
import Bookingsuccessful from "./Bookingsuccessful";
import PassengerInfo from "./layouts/PassengerInfo";
import { useNavigate } from "react-router-dom";

const TravellerDetails = () => {
    const navigate = useNavigate();
    const [passengerDetails, setPessengerDetails] = useState([
        {
            name_title: "Mr",
            age_type: "Adult",
            pass_name: "Robin Hood",
            gender: "Male",
            dob: "17 October, 2000",
            country: "Bangladesh",
            email: "contact@example.com",
            phone: "8801555555557",
        },
        {
            name_title: "Mstr",
            age_type: "Child",
            pass_name: "Babu Lal",
            gender: "Male",
            dob: "17 October, 2020",
            country: "Bangladesh",
            email: "contact@example.com",
            phone: "56525646",
        },
    ]);

    return (
        <PassengerInfo>
            <div className="flex flex-col items-center text-start">
                <h1 className="text-center text-2xl font-bold my-3 text-primary">
                    Traveller Details
                </h1>

                {/* Traveler Details Section */}
                {passengerDetails.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-2xl w-full mx-auto my-4 p-4 border border-gray-300 rounded-lg shadow-lg"
                    >
                        <h2 className="text-lg font-semibold text-white bg-primary px-4 py-2 rounded-t-lg">
                            Traveler {index + 1} ({item.age_type})
                        </h2>
                        <div className="p-4 bg-gray-50 rounded-b-lg">
                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                                <p>
                                    <span className="font-medium">Name : </span>
                                    {`${item.name_title} ${item.pass_name}`}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Gender :{" "}
                                    </span>
                                    {item.gender}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Date of Birth :{" "}
                                    </span>
                                    {item.dob}
                                </p>
                                <p>
                                    <span className="font-medium">Country : </span>
                                    {item.country}
                                </p>
                                {item.age_type !== "Child" &&
                                    item.age_type !== "Kid" && (
                                        <>
                                            <p>
                                                <span className="font-medium">
                                                    Email :
                                                </span>{" "}
                                                {item.email}
                                            </p>
                                            <p>
                                                <span className="font-medium">
                                                    Phone Number :{" "}
                                                </span>
                                                {item.phone}
                                            </p>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add Ons Section */}
                <h1 className="text-center text-2xl font-bold text-primary">
                    Add Ons
                </h1>

                <div className="max-w-2xl w-full mx-auto my-6 p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
                    {/* <h2 className="text-red-500 text-sm font-semibold mb-2">
                        Add Ons
                    </h2> */}
                    <h3 className="text-lg font-semibold">
                        Baggage Protection
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Get Covered for Baggage Loss or Delay
                    </p>

                    {/* Icons and Description */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                        <div>
                            <FaRegClock className="mx-auto text-gray-500 text-2xl" />
                            <p className="font-medium text-sm mt-2">
                                Live Tracking
                            </p>
                            <p className="text-gray-500 text-xs">
                                Track your baggage up to 4 days after arrival
                            </p>
                        </div>
                        <div>
                            <FaCheckCircle className="mx-auto text-gray-500 text-2xl" />
                            <p className="font-medium text-sm mt-2">
                                No Proof Required
                            </p>
                            <p className="text-gray-500 text-xs">
                                No bills needed to claim compensation
                            </p>
                        </div>
                        <div>
                            <FaShieldAlt className="mx-auto text-gray-500 text-2xl" />
                            <p className="font-medium text-sm mt-2">
                                Guaranteed Payment
                            </p>
                            <p className="text-gray-500 text-xs">
                                Get your dues via insurance compensation
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-6">
                        Travel worry-free with our Baggage Coverage plans.
                        Select your preferred plan below and ensure your
                        belongings are protected
                        <span className="text-blue-500 cursor-pointer ml-1">
                            Learn More
                        </span>
                    </p>

                    {/* Plan Options with Equal Width */}
                    <div className="flex gap-4 mb-6">
                        <div className="flex-1 basis-1/2 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                            <div className="flex items-center mb-2">
                                <FaSuitcase className="text-gray-500 text-2xl mr-2" />
                                <span className="font-medium text-sm">
                                    Insure My Baggage With
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Blue Ribbon Bags
                            </p>
                        </div>
                        <div className="flex-1 basis-1/2 p-4 border border-red-500 bg-red-50 rounded-lg cursor-pointer hover:border-red-600">
                            <p className="font-medium text-sm mb-2 text-red-600">
                                I Do Not Require
                            </p>
                            <p className="text-gray-600 text-sm">
                                Baggage Protection
                            </p>
                        </div>
                    </div>

                    {/* Footer with Buttons */}
                    <p className="text-xs text-gray-500 text-center mb-4">
                        By clicking book now or pay now options, I agree with
                        Flight Expert{" "}
                        <span className="text-blue-500 cursor-pointer">
                            Privacy Policy
                        </span>{" "}
                        and
                        <span className="text-blue-500 cursor-pointer ml-1">
                            Terms & Conditions.
                        </span>
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button
                            className="px-4 py-2 border border-gray-400 rounded-md text-gray-600 text-sm hover:bg-gray-100"
                            onClick={() => navigate("/bookingsuccess")}
                        >
                            Book Now (Pay Later)
                        </button>
                        <button className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-teal-500">
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </PassengerInfo>
    );
};

export default TravellerDetails;
