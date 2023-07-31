import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./MoviesListCard.module.css"

import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {genresService} from "../../../services";
import {GenresForMovie} from "../../GenresForMovie/GenresForMovie";


const MoviesListCard = ({movie}) => {
    const {poster_path, title, id, genre_ids} = movie;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${id}`);
    }

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        genresService.getAll().then(({data}) => {
            setGenres(data.genres.filter(value => genre_ids.includes(value.id)))
        });
    }, [])

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <h3>{title}</h3>
            <div className={styles.genresWrapper}>
            {genres?.map(genre => (
                <GenresForMovie genre={genre} key={genre.id}/>
            ))}
            </div>
        </div>
    );
};

export {MoviesListCard};