import React from 'react';

import styles from './PosterPreview.module.css'

const PosterPreview = ({title, poster_path}) => {
    return (
        <div className={styles.poster}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};