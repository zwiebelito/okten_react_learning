import React, {useRef} from 'react';
import {useArray} from "../../hooks/useArray";

const Task5Page = () => {
    const {data, add, remove} = useArray([1,2,3,4,5])
    const input = useRef()
    return (
        <>
        <div>
            <input type="text" ref={input}/>
            <button onClick={() => add(input.current.value)}>Add item</button>
        </div>
        <div>
            {data.map((item, index) => (
                <div>
                <p key={index}>{item}</p>
                    <button onClick={() => remove(index)}>Delete</button>
                </div>
            ))}
        </div>
        </>
    );
};

export {Task5Page};