import React from 'react';
import styles from './MovieDetailsInfo.module.css'

const MovieDetailsInfo = ({movie}) => {
    const {title, overview, vote_average, poster_path} = movie;

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
                <div className={styles.title}>
                    <h3>{title}</h3>
                    <h4>Overall rating: {vote_average}</h4>
                </div>
            </div>
            <div className={styles.descr}>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export {MovieDetailsInfo};