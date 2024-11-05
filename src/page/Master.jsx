import React from 'react';
import Navbar from "src/components/Navbar";
import Footer from 'src/components/Footer';

const Master = ({children}) => {
    return (
        <div className='master-page'>
            <header>
                <Navbar/>             
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Master;