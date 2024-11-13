// src/routers/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from 'src/page/Home';
import FlightChoose from 'src/page/FlightChoose';
import Master from 'src/page/layouts/Master';

import Signin from 'src/page/Signin';
import Travellerdetails from 'src/page/Travellerdetails';
import EnterTraverlDetails from 'src/page/EnterTraverlDetails';
import Bookingsuccessful from '../page/Bookingsuccessful';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Outside the master Layout */}
                <Route path={"/signin"} element={<Signin/>} />

                {/* Inside the master Layout */}
                <Route element={<Master/ >}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/chooseflight"} element={<FlightChoose />} />
                    <Route path={"/travelerentery"} element={<EnterTraverlDetails />} />
                    <Route path={"/travelerentery/:id"} element={<EnterTraverlDetails />} />
                    <Route path={"/travelerdetails"} element={<Travellerdetails />} />
                    <Route path={"/bookingsuccess"} element={<Bookingsuccessful />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;

