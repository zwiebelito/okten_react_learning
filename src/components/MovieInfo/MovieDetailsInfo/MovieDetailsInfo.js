import React from 'react';
import styles from './MovieDetailsInfo.module.css'
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieDetailsInfo = ({movie}) => {
    const {title, overview, vote_average, poster_path} = movie;
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                {poster_path && <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>}
                <div className={styles.title}>
                    <h3>{title}</h3>
                    <StarRatings
                        rating={vote_average}
                        numberOfStars={10}
                        starDimension="15px"
                        starSpacing="10px"
                        starRatedColor="darkslateblue"/>
                </div>
            </div>
            <div className={styles.descr}>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export {MovieDetailsInfo};