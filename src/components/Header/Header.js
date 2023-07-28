import React from 'react';

import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.logo}>
                <NavLink to={''}>
                    <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/external-Popcorn-cinema-bearicons-outline-color-bearicons.png" alt="logo"/>
                </NavLink>
                <UserInfo />
            </div>
            <div className={styles.links}>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
        </div>
    );
};

export {Header};