import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{'display': 'flex', 'justifyContent': 'space-around', 'margin': '20px 0 30px'}}>
            <NavLink to={'task1'}>Task1</NavLink>
            <NavLink to={'task2'}>Task2</NavLink>
            <NavLink to={'task3'}>Task3</NavLink>
            <NavLink to={'task4Users'}>Users</NavLink>
            <NavLink to={'task4Posts'}>Posts</NavLink>
            <NavLink to={'task4Comments'}>Comments</NavLink>
            <NavLink to={'task5'}>Task5</NavLink>
        </div>
    );
};

export {Header};