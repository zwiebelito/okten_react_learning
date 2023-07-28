import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {MovieDetailsInfo} from "./MovieDetailsInfo/MovieDetailsInfo";

const MovieInfo = () => {
    const [movie, setMovie] = useState([])
    const {movieId} = useParams();

    useEffect(()=> {
        moviesService.getById(movieId).then(({data}) => setMovie(data))
    }, [movieId])
    return (
        <div>
            <MovieDetailsInfo movie={movie} key={movie.id}/>
        </div>
    );
};

export {MovieInfo};