import React from 'react';

import {Genres} from "../../components";
import styles from "./GenresPage.module.css"

const GenresPage = () => {
    return (
        <div className={styles.wrapper}>
            <h2>List of genres:</h2>
            <Genres />
        </div>
    );
};

export {GenresPage};