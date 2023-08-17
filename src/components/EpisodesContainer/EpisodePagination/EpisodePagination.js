import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const EpisodePagination = () => {
    const [, setQuery] = useSearchParams();
    const {next, prev} = useSelector(store => store.episodes);

    const getPrevPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') - 1}));
    }

    const getNextPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') + 1}));
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button style={{backgroundColor: 'cadetblue', padding: '5px', margin: '5px', border: '1px solid darkslateblue'}}
                    disabled={!prev} onClick={getPrevPage}>Prev</button>
            <button style={{backgroundColor: 'cadetblue', padding: '5px', margin: '5px', border: '1px solid darkslateblue'}}
                disabled={!next} onClick={getNextPage}>Next</button>
        </div>
    );
};

export {EpisodePagination};