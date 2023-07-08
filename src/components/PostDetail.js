import React from 'react';

const PostDetail = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <hr/>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <hr/>
        </div>
    );
};

export {PostDetail};