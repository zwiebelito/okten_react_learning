import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./MoviesListCard.module.css"

import {PosterPreview} from "../../PosterPreview/PosterPreview";


const MoviesListCard = ({movie}) => {
    const {poster_path, title, id} = movie;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${id}`);
    }

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <h3>{title}</h3>
        </div>
    );
};

export {MoviesListCard};