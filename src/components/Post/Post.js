import React from 'react';
import styles from './Post.css'

const Post = ({post}) => {
   const {userId, id, title, body} = post;
    return (
        <div className={'postStyle'}>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Post;