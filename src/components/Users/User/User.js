import React from 'react';

const User = ({user}) => {
    const {name, username, email} = user;
    return (
        <div>
            <p>Full name: {name} {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export {User};