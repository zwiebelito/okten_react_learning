import React from 'react';
import User from "./components/User/User";
import Comment from "./components/Comment/Comment";
import './App.css'

const App = () => {
    return (
        <div className="root">
            <User />
            <Comment />
        </div>
    );
};

export default App;