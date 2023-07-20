import React from 'react';
import styles from './Navbar.module.css'
import {links} from "../../configs/links";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            {links.map(link => <Link to={link.path}>{link.label}</Link>)}
        </div>
    );
};

export default Navbar;