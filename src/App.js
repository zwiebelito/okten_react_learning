import React, {useState} from 'react';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import styles from './App.css'

const App = () => {
    const [userId, setUserId] = useState(null)
    return (
        <div className={'root'}>
            <Users setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;