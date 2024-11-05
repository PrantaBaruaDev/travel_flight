// src/routers/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from 'src/page/Home';
import FlightChoose from 'src/page/FlightChoose';
import Master from 'src/page/Master';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Master>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/chooseflight"} element={<FlightChoose />} />
            </Routes> 
            </Master>
        </BrowserRouter>
    );
};

export default AppRouter;

