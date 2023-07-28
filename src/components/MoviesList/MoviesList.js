import React, {useEffect, useState} from 'react';

import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import styles from './MoviesList.module.css'

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    const [allPages, setAllPages] = useState(null);
    const [page, setPage] = useState(1);


    useEffect(()=> {
        moviesService.getAll(page).then(({data}) => {
            setMovies(data.results);
            setAllPages(data.total_pages);
        });
    },[page])
    return (
        <div className={styles.movies}>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={styles.buttons}>
            <button disabled={page === 1} onClick={()=> setPage(prev=> prev-1)}>Previous Page</button>
            <button disabled={page > allPages} onClick={()=> setPage(prev=> prev+1)}>Next Page</button>
            </div>
        </div>
    );
};

export {MoviesList};