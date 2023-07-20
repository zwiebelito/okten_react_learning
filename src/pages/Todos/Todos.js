import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todosService/todosService";
import Todo from "./Todo/Todo";
import styles from './Todos.module.css'

const ToDos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data));

    }, []);

    return (
        <>
            <div className={styles.container}>
                {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
            </div>
        </>
    );
};

export default ToDos;