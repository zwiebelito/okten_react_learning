import React, {useEffect, useState} from 'react';
import {Services} from "../../services/Services";
import Todo from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(()=> {
        Services.getTodos()
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            {todos.map(todo => <Todo key = {todo.id} todo = {todo}/>)}
        </div>
    );
};

export default Todos;