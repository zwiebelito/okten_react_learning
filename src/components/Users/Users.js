import React from 'react';
import User from "../User/User";
import styles from  './Users.css'
const Users = ({users}) => {
    return (
        <div className={'users'}>
            {users.map((user)=> <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;