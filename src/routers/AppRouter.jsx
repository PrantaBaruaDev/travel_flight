// src/routers/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from 'src/page/Home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes> 
        </BrowserRouter>
    );
};

export default AppRouter;

