// src/routers/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/page/Home";
import FlightChoose from "src/page/FlightChoose";
import Master from "src/page/layouts/Master";

import Signin from "src/page/Signin";
import Travellerdetails from "src/page/Travellerdetails";
import EnterTraverlDetails from "src/page/EnterTraverlDetails";
import Bookingsuccessful from "../page/Bookingsuccessful";
import Payment from "../page/Payment";
import Createaccount from "../page/Createaccount";
import TeamMember from "src/components/TeamMember";

// admin Page link part
// import MasterDeshboard from "./../admin/layouts/MasterDeshboard";
import Admin from "../admin/layouts/Admin";
// views
import Dashboard from "src/admin/views/admin/Dashboard";
import Settings from "src/admin/views/admin/Settings";
import Tables from "src/admin/views/admin/Tables";
import Flights from "src/admin/AAdmin/Flights";
import Airlines  from "src/admin/AAdmin/Airlines";
import Airports  from "src/admin/AAdmin/Airports";
import Passengers  from "src/admin/AAdmin/Passengers";
import Payments  from "src/admin/AAdmin/Payments";
import Resarvation  from "src/admin/AAdmin/Resarvation";
import Seats  from "src/admin/AAdmin/Seats";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Outside the master Layout */}
                <Route path={"/signin"} element={<Signin />} />
                <Route path={"/account"} element={<Createaccount />} />
                {/* Inside the master Layout */}
                <Route element={<Master />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/chooseflight"} element={<FlightChoose />} />
                    <Route
                        path={"/travelerentery"}
                        element={<EnterTraverlDetails />}
                    />
                    <Route
                        path={"/travelerentery/:id"}
                        element={<EnterTraverlDetails />}
                    />
                    <Route
                        path={"/travelerdetails"}
                        element={<Travellerdetails />}
                    />
                    <Route
                        path={"/bookingsuccess"}
                        element={<Bookingsuccessful />}
                    />
                    <Route path={"/payment"} element={<Payment />} />
                    <Route path={"/team"} element={<TeamMember />} />
                </Route>

                <Route element={<Admin />}>
                    {/* <Route path={"/admin/dashboard"} element={<Dashboard />} /> */}
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/settings" element={<Settings />} />
                    <Route path="/admin/flights" element={<Flights />} />
                    <Route path="/admin/airlines" element={<Airlines />} />
                    <Route path="/admin/airports" element={<Airports />} />
                    <Route path="/admin/passengers" element={<Passengers />} />
                    <Route path="/admin/payments" element={<Payments />} />
                    <Route path="/admin/resarvation" element={<Resarvation />} />
                    <Route path="/admin/seats" element={<Seats />} />
                    <Route path="/admin/tables" element={<Tables />} />
                    {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
