import React from 'react';
import styles from "./Genre.module.css"

const Genre = ({genre}) => {
    const {name} = genre;
    return (
        <div className={styles.genre}>
            <h3>{name}</h3>
        </div>
    );
};

export {Genre};