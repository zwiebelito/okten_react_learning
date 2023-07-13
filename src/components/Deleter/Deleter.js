import React from 'react';
import {useForm} from "react-hook-form";
import styles from "./Deleter.module.css"

const Deleter = () => {

    const {handleSubmit, register} = useForm()

    const onSubmit = (data) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${data.id}`, {
            method: "DELETE"
        })
            /*.then((res)=> res.json())
            .then((data)=> console.log(data))*/
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Id:
                    <input type="text" {...register("id")}/>
                </label>
                <input type="submit" value="delete a car" className={styles.submit}/>
            </form>
        </div>
    );
};

export default Deleter;