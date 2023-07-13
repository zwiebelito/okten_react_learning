import React from 'react';
import {useForm} from "react-hook-form";
import styles from './Comment.module.css'

const Comment = () => {

    const { handleSubmit, register } = useForm()

    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(data)})
            .then((res)=> res.json())
            .then((data)=> console.log(data))
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    PostId:
                    <input type="text" {...register("postId")}/>
                </label>
                <label>
                    Name:
                    <input type="text" {...register("name")}/>
                </label>
                <label>
                    Email:
                    <input type="text" {...register("email")}/>
                </label>
                <label>
                    Body:
                    <input type="text" {...register("body")}/>
                </label>
                <input type='submit' value='create a comment' className={styles.submit}/>
            </form>
        </div>
    );
};

export default Comment;