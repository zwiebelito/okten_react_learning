import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import UserAddress from "../UserAddress/UserAddress";
import Company from "../Company/Company";
import styles from './User.css'

const User = ({user}) => {
    return (
        <div className={'user'}>
            <UserDetails user={user}/>
            <UserAddress user={user}/>
            <Company user={user}/>
        </div>
    );
};

export default User;