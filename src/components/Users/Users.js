import React from 'react';
import {User} from "./User/User";

const Users = ({users}) => {
    return (
        <div>
            {users && users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};