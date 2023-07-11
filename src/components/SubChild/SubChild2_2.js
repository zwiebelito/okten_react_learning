import React, {useContext, useEffect} from 'react';
import {GreetingContext} from "../../App";
const SubChild2_2 = () => {
    const {setGreetings} = useContext(GreetingContext);

    const greetings = {
        greet1: 'Hello', greet2: 'world'
    }

    useEffect(() => {
        setGreetings(greetings);
    }, []);

    return (
        <div>
            <p>{greetings.greet1} {greetings.greet2}</p>
        </div>
    );
};

export default SubChild2_2;