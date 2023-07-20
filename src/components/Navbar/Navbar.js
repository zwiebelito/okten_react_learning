import React from 'react';
import styles from './Navbar.module.css'
import {links} from "../../configs/links";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    const {pathname} = useLocation();
    return (
        <div className={styles.wrapper}>
            {links.map(link => <Link style={{color: link.path === pathname ? 'red' : 'blue'}}
            to={link.path}>{link.label}</Link>)}
        </div>
    );
};

export default Navbar;