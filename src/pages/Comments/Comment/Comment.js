import React from 'react';
import styles from './Comment.module.css'

const Comment = ({comment, getPost}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div onClick={() => getPost(id)} className={styles.border}>
            <p>PostId: {postId}</p>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;