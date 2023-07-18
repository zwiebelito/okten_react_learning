import React from 'react';
import {useForm} from "react-hook-form";
import styles from './Comment.module.css'
import {Services} from "../../services/Services";
import {joiResolver} from "@hookform/resolvers/joi";
import {CommentValidator} from "../../validators/CommentValidator/CommentValidator";

const Comment = () => {

    const { handleSubmit, register, formState: {errors, isValid} } = useForm({
        mode: 'all',
        resolver: joiResolver(CommentValidator)
    })

    const onSubmit = (data) => {
        Services.createComment(data)
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    PostId:
                    <input type="text" {...register("postId")}/>
                </label>
                {errors.postId && <span>{errors.postId.message}</span>}
                <label>
                    Name:
                    <input type="text" {...register("name")}/>
                </label>
                {errors.name && <span>{errors.name.message}</span>}
                <label>
                    Email:
                    <input type="text" {...register("email")}/>
                </label>
                {errors.email && <span>{errors.email.message}</span>}
                <label>
                    Body:
                    <input type="text" {...register("body")}/>
                </label>
                {errors.body && <span>{errors.body.message}</span>}
                <input type='submit' value='create a comment' className={styles.submit}/>
            </form>
        </div>
    );
};

export default Comment;