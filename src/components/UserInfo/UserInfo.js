import React from 'react';
import styles from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={styles.user}>
            <img src="https://www.pngall.com/wp-content/uploads/5/Rey-Mysterio-PNG-Image.png" alt="avatar"/>
            <p>Rey Mysterio</p>
        </div>
    );
};

export {UserInfo};