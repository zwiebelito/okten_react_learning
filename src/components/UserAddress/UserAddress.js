import React from 'react';
import styles from './UserAddress.css'
const UserAddress = ({user}) => {
    const {address: {street, suite, city}} = user;
    return (
        <div>
          <p className={'address'}>Street: {street}, suite: {suite}, city: {city}</p>
        </div>
    );
};

export default UserAddress;
