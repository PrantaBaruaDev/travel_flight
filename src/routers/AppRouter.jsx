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

import Admin from "../admin/layouts/Admin";

// views

import Dashboard from "src/admin/views/admin/Dashboard";
import Settings from "src/admin/views/admin/Settings";
import Tables from "src/admin/views/admin/Tables";
import Flights from "src/admin/AAdmin/Flights/Flights";
import FlightTable from "src/admin/AAdmin/Flights/FlightTable";
import Airlines  from "src/admin/AAdmin/Airlines/Airlines";
import Airports  from "src/admin/AAdmin/Airports/Airports";
import Passengers  from "src/admin/AAdmin/Passengers/Passengers";
import Payments  from "src/admin/AAdmin/Payments/Payments";
import Resarvation from "src/admin/AAdmin/Resarvation/Resarvation";
import Seats from "src/admin/AAdmin/Seats/Seats";
import AirlinesTable from 'src/admin/AAdmin/Airlines/AirlinesTable';
import AirportsTable from "src/admin/AAdmin/Airports/AirportsTable";
import SeatsTable from "src/admin/AAdmin/Seats/SeatsTable";

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

                    <Route path={"/flight"} element={<Flights />} />
                    <Route path={"/team"} element={<TeamMember />} />
                </Route>

                <Route element={<Admin />}>
                    {/* <Route path={"/admin/dashboard"} element={<Dashboard />} /> */}
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/settings" element={<Settings />} />

                    <Route path="/admin/flights" element={<Flights />} />
                    <Route path="/admin/flights/:id" element={<Flights page="Edit" />} />
                    <Route path="/admin/flights/table" element={<FlightTable />} />

                    <Route path="/admin/airlines" element={<Airlines />} />
                    <Route path="/admin/airlines/:id" element={<Airlines page="Edit" />} />
                    <Route path="/admin/airlines/table" element={<AirlinesTable />} />

                    <Route path="/admin/airports" element={<Airports />} />
                    <Route path="/admin/airports/:id" element={<Airports page="Edit" />} />
                    <Route path="/admin/airports/table" element={<AirportsTable />} />

                    <Route path="/admin/passengers" element={<Passengers />} />
                    <Route path="/admin/passengers/:id" element={<Passengers page="Edit" />} />

                    <Route path="/admin/payments" element={<Payments />} />
                    <Route path="/admin/resarvation" element={<Resarvation />} />

                    <Route path="/admin/seats/table" element={<SeatsTable />} />
                    <Route path="/admin/seats/:id" element={<Seats page="Edit" />} />
                    <Route path="/admin/seats" element={<Seats />} />

                    <Route path="/admin/tables" element={<Tables />} />
                    {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
