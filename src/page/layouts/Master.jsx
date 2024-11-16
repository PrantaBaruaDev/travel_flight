import React from 'react';
import Navbar from "src/components/Navbar";
import Footer from 'src/components/Footer';
import { Outlet } from 'react-router-dom';

const Master = ({children}) => {
    return (
        <div className='master-page'>
            <header className='header-root'>
                <Navbar/>             
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Master;