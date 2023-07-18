import React from 'react';
import {useForm} from "react-hook-form";
import styles from './Comment.module.css'
import {Services} from "../../services/Services";

const Comment = () => {

    const { handleSubmit, register } = useForm()

    const onSubmit = (data) => {
        Services.getComments(data)
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