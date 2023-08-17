import React from 'react';
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {name, air_date, episode: chapter} = episode;
    const charactersIds = episode.characters;
    const navigate = useNavigate();

    const showCharacters = () => {
        navigate('/characters', {state: {charactersIds, name}});
    }

    return (
        <div style={{backgroundColor: 'cadetblue', padding: '10px', textAlign: 'center', margin: '15px', border: '1px solid darkslateblue'}}>
            <div onClick={showCharacters}>
                <p>Title: {name}</p>
                <p>Air date: {air_date}</p>
                <p>Episode: {chapter}</p>
            </div>
        </div>
    );
};

export {Episode};