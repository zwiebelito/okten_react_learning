import React from 'react';
import "./App.css"
import Creator from "./components/Creator/Creator";
import Deleter from "./components/Deleter/Deleter";
import Updater from "./components/Updater/Updater";

const App = () => {
    return (
        <div className='root'>
          <Creator />
            <Deleter />
            <Updater />
        </div>
    );
};

export default App;