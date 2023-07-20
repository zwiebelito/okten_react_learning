import React, {useEffect, useState} from 'react';
import {Services} from "../../services/Services";
import Album from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(()=> {
        Services.getAlbums()
            .then(data => setAlbums(data))
    }, [])
    return (
        <div>
            {albums.map(album => <Album key = {album.id} album={album}/>)}
        </div>
    );
};

export default Albums;