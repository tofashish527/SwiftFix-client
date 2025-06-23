import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;