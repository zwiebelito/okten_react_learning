import React, {useCallback, useMemo, useState} from 'react';
import TestUseCallbackUsers from "../TestUseCallbackUsers/TestUseCallbackUsers";


const TestUseCallback = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    const increaseCount = () => {
        setCount(count + 1)
    }

    const addUser = useCallback(() => {
        setUsers([...users, 'One more user'])
    }, [users])

    const expCalculation = (number) => {
        console.log('calculating...')
        for (let i = 0; i < 1000000000; i++) {
            number += 1;
        }
        return number
    }

    const calculation = useMemo(() => expCalculation(count), [count])

    return (
        <div>
            <h2 style={{'display': 'flex', 'justifyContent': 'center'}}>TestUseCallback</h2>
            <p>Count: {count}</p>
            <button onClick={() => increaseCount(count)}>Increase</button>
            <br/>
            <p>Calculation: {calculation}</p>
            <hr/>
           <TestUseCallbackUsers users={users} addUser={addUser}/>
        </div>
    );
};

export {TestUseCallback};