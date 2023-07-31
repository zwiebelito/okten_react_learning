import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <NavLink to={''}>Okten</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export  {Header};