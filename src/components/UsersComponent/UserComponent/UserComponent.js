import React from 'react';

const UserComponent = ({user, setUserId, isShow, setIsShow}) => {
    const {id, name, username, email, phone, website} = user;
    return (
        <div>
            <h2>{id}. {name} {username}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <button onClick={() => {setUserId(id)
                setIsShow(!isShow)
            }}>{isShow ? 'Hide' : 'Show'}</button>
        </div>
    );
};

export default UserComponent;