import React, {useMemo, useState} from 'react';
import {logDOM} from "@testing-library/react";

const TestUseMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    const increaseCount = () => {
        setCount(count + 1)
    }

    const addUser = () => {
        console.log('render')
        setUsers(prevState => [...prevState, 'New user'])
    }

    const expCalculation = (number) => {
        console.log("calculating...")
        for (let i = 0; i < 1000000000; i++) {
            number += 1;
        }
        return number
    }

    const calculation = useMemo(() => expCalculation(count), [count])

    return (
        <div>
            <h2 style={{'display': 'flex', 'justifyContent': 'center'}}>TestUseMemo</h2>
            <p>Count: {count}</p>
            <button onClick={() => increaseCount(count)}>Increase</button>
            <br/>
            <p>Calculation: {calculation}</p>
            <hr/>
            <p>User's list: </p>
            {users.map((user, id) => <p key={id}>{user}</p>)}
            <button onClick={() => addUser()}>Add user</button>
        </div>
    );
};

export {TestUseMemo};