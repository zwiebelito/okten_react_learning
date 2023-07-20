import React from 'react';
import styles from './Main.module.css';
const Main = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.photo} src="https://cyber.sports.ru/dynamic_images/news/110/912/306/3/share/4d9587_no_logo_no_text.jpg" alt='image'/>
        </div>
    );
};

export default Main;