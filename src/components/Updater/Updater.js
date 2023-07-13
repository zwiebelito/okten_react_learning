import React from 'react';
import {useForm} from "react-hook-form";
import styles from "./Updater.module.css"

const Creator = () => {

    const {handleSubmit, register} = useForm()

    const onSubmit = (data) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${data.id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res)=> res.json())
            .then((data)=> console.log(data))
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Id:
                    <input type="text" {...register("id")}/>
                </label>
                <label>
                    Brand:
                    <input type="text" {...register("brand")}/>
                </label>
                <label>
                    Price:
                    <input type="text" {...register("price")}/>
                </label>
                <label>
                    Year:
                    <input type="text" {...register("year")}/>
                </label>
                <input type="submit" value="create a new car" className={styles.submit}/>
            </form>
        </div>
    );
};

export default Creator;