import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import user from "../User/User";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then((value)=> value.json())
            .then(posts => setPosts(posts))
    }, [userId])
    return (
        <div>
            {posts.map((post)=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;