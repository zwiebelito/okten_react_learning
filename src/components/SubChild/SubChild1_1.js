import React, {useContext} from 'react';
import {GreetingContext} from "../../App";
const SubChild1_1 = () => {
    const {greetings} = useContext(GreetingContext);

    return (
        <div>
            {<p>{greetings?.greet1} {greetings?.greet2}</p>}
        </div>
    );
};

export default SubChild1_1;