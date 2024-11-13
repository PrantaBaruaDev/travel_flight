import React, { useState } from 'react';
import { flightDataContext } from './../../context/context';
import FlightData from 'src/data/flightData.json';
import { useParams } from 'react-router-dom';

const DataContextMaster = ({ children }) => {
    const {id} = useParams();
    const [ data, setData ] = useState({
        flightData: id !== undefined ? FlightData[parseInt(id)] : FlightData[0],
    });

    return (
        <flightDataContext.Provider value={{data, setData}} children={children} />
    );
};

export default DataContextMaster;