import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AppLayout;