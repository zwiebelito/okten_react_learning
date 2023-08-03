import React, {memo} from 'react';

const TestUseCallbackUsers = ({users, addUser}) => {
    console.log('users render')
    return (
        <div>
            <p>User's list: </p>
            {users.map((user, id) => <p key={id}>{user}</p>)}
            <button onClick={() => addUser()}>Add user</button>
        </div>
    );
};

export default memo(TestUseCallbackUsers);