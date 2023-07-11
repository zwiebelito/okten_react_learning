import React from 'react';


const UserPost = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <h2>id: {id}, userId: {userId}</h2>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default UserPost;