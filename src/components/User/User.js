import React, {useState} from 'react';
import styles from './User.css'

const User = ({user, setUserId}) => {
    const {name, username, email, address: {city}} = user;
    const {id} = user;

    return (
        <div className={'wrapper'}>
           <h3>Name: {name}</h3>
           <h3>Username: {username}</h3>
           <h3>Email: {email}</h3>
           <h3>City: {city}</h3>
            <div className={'buttonDiv'}>
                <button onClick={()=> setUserId(id)}>Get posts</button>
            </div>
        </div>

    );
};

export default User;