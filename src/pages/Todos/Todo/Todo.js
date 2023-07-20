import React from 'react';

const Todo = ({todo}) => {
    const {id, title, completed} = todo;

    return (
        <div>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Completed: {JSON.stringify(completed)}</p>
        </div>
    );
};

export default Todo;