import React from 'react';

const Post = ({post}) => {
    const {userId, title, body} = post;
    return (
        <div>
            <h4>Id: {userId}</h4>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};