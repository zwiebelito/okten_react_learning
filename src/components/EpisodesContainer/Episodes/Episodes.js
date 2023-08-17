import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {useSearchParams} from "react-router-dom";
import {episodeActions} from "../../../redux";
import {Episode} from "../Episode/Episode";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page');

    useEffect( () => {
        setQuery(prev => ({...prev, page: prev.get('page')}));
        dispatch(episodeActions.getTitle(null));
        dispatch(episodeActions.all({page}));
    }, [page]);

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode} /> )}
        </div>
    );
};

export {Episodes};