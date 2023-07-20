import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import styles from './AppLayout.module.css'
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <h3>Content</h3>
            <Outlet />
        </div>
    );
};

export default AppLayout;