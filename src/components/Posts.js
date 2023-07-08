import React, {useEffect, useState} from 'react';
import {Post} from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(post => setPosts(post))
    })

    return (
        <>
            {posts.map((post)=> <Post key={post.id} post={post}/>)}
        </>
    );
};

export default Posts;