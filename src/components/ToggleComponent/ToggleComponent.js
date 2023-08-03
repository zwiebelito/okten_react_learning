import React from 'react';
import {useToggle} from "../../hooks/useToggle";

const ToggleComponent = () => {
    const [status, changeStatus] = useToggle(true)
    return (
        <div>
            <h2 style={{'display': 'flex', 'justifyContent': 'center'}}>Use Toggle Hook - Status: {status.toString()}</h2>
            <button onClick={changeStatus}>Change status</button>
        </div>
    );
};

export  {ToggleComponent};