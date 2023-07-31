import React from 'react';
import styles from './GenresForMovie.module.css'
const GenresForMovie = ({genre}) => {
    const {name} = genre;
    return (
        <div className={styles.wrapper}>
            <p>{name}</p>
        </div>
    );
};

export {GenresForMovie};