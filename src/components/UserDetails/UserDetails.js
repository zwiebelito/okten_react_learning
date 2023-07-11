import React from 'react';
import styles from './UserDetails.css'
const UserDetails = ({user}) => {
const {id, name, username, email, phone, website} = user;
    return (
        <div className={'details'}>
            <p>{id}. {name} {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;