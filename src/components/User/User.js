import React from 'react';
import {useForm} from "react-hook-form";
import styles from './User.module.css'
import {Services} from "../../services/Services";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/UserValidator/userValidator";

const User = () => {

    const { handleSubmit, register, formState: {errors, isValid} } = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })

    const onSubmit = (data) => {
        Services.createUser(data)
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input type="text" {...register("name")}/>
                </label>
                {errors.name && <span>{errors.name.message}</span>}
                <label>
                    Username:
                    <input type="text" {...register("username")}/>
                </label>
                {errors.username && <span>{errors.username.message}</span>}
                <label>
                    Email:
                    <input type="text" {...register("email")}/>
                </label>
                {errors.email && <span>{errors.email.message}</span>}
                <input type='submit' value='add a user' className={styles.submit}/>
            </form>
        </div>
    );
};

export default User;