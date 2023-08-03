import React from 'react';

const Comment = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};