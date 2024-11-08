// src/routers/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from 'src/page/Home';
import FlightChoose from 'src/page/FlightChoose';
import Master from 'src/page/Master';

import Signin from '../page/Signin';
import Travellerdetails from '../page/Travellerdetails';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Master>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/chooseflight"} element={<FlightChoose />} />
                <Route path={"/signin"} element={<Signin/>} />
                <Route path={"/travelerdetails"} element={<Travellerdetails/>}></Route>
            </Routes> 
            </Master>
        </BrowserRouter>
    );
};

export default AppRouter;

