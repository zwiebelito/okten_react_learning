import React from 'react';
import {MoviesList} from "../../../components";
import styles from "./MoviesPage.module.css"

const MoviesPage = () => {
    return (
        <div className={styles.wrapper}>
            <h2>List of movies:</h2>
            <MoviesList />
        </div>
    );
};

export {MoviesPage};