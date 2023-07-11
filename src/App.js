import React, {createContext, useState} from 'react';
import './App.css';
import Child1 from "./components/Child/Child1";
import Child2 from "./components/Child/Child2";

export const GreetingContext = createContext(null);
const App = () => {
    const [greetings, setGreetings] = useState(null);

    return (
        <div className={'root'}>
            <GreetingContext.Provider value={{greetings, setGreetings}}>
                <Child1 />
                <Child2 />
            </GreetingContext.Provider>
        </div>
    );
};

export default App;