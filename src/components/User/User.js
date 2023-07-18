import React from 'react';
import {useForm} from "react-hook-form";
import styles from './User.module.css'
import {Services} from "../../services/Services";

const User = () => {

    const { handleSubmit, register } = useForm()

    const onSubmit = (data) => {
        Services.getUsers(data)
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input type="text" {...register("name")}/>
                </label>
                <label>
                    Username:
                    <input type="text" {...register("username")}/>
                </label>
                <label>
                    Email:
                    <input type="text" {...register("email")}/>
                </label>
                <input type='submit' value='add a user' className={styles.submit}/>
            </form>
        </div>
    );
};

export default User;