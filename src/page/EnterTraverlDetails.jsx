import React from "react";
import PassengerFrom from "src/components/traveller_details/PassengerFrom";
import PassengerInfo from "./layouts/PassengerInfo";
import { useParams } from "react-router-dom";

const EnterTraverlDetails = () => {
    const { id } = useParams();
    return (
        <PassengerInfo flightID={id} >
            <PassengerFrom />
        </PassengerInfo>
    );
};

export default EnterTraverlDetails;
