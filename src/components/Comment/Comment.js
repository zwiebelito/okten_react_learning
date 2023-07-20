import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
            <Link to={postId.toString()}>Get Post</Link>
        </div>
    );
};

export default Comment;