import React from 'react';
import styles from './ErrorPage.module.css';
import Navbar from "../../components/Navbar/Navbar";
const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.wrapper}>
                <img className={styles.photo} src='https://miro.medium.com/v2/resize:fit:1080/1*GQnRWgvBWLomxCVY-5h4gA.png' alt='photo'/>
            </div>
        </>
    );
};

export default ErrorPage;