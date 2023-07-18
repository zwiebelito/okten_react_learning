import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

const CarForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, setValue} = useForm()

    const save = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then((response) => response.json())
            .then(() => setOnSave(prev => !prev))
            reset()
    }

    useEffect(()=> {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    })

    const update = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
            headers: {'content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(car)
        })
            .then((response) => response.json()).then(()=> {
                setOnSave(prev => !prev)
                setCarForUpdate(null)
                reset()
        })
    }

    return (
        <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
            <label>
                <input type="text" placeholder={'brand'} {...register("brand")}/>
            </label>
            <label>
                <input type="text" placeholder={'price'} {...register("price")}/>
            </label>
            <label>
                <input type="text" placeholder={'year'} {...register("year")}/>
            </label>
            <button>{!carForUpdate ? 'Save' : 'Update'}</button>
        </form>
    );
};

export default CarForm;