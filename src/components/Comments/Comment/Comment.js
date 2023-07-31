import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, email, name, body} = comment;
    return (
        <div>
            <h4>Post id: {postId} - id: {id} - name: {name}</h4>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};