import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {createCarsThunk, updateCarThunk} from "../../../redux";


const CarForm = () => {

    const carForUpdate = useSelector(state => state.cars.carForUpdate);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        setValue
    } = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue])

    const save = (car) => {
        dispatch(createCarsThunk(car));
    }

    const update = (car) => {
        dispatch(updateCarThunk(carForUpdate.id, car))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <label>Brand:
                    <input type="text" placeholder={'brand'} {...register('brand')}/>
                </label>
                <br/>
                <br/>
                <label>Price:
                    <input type="text" placeholder={'price'} {...register('price')}/>
                </label>
                <br/>
                <br/>
                <label>Year:
                    <input type="text" placeholder={'year'} {...register('year')}/>
                </label>
                <br/>
                <br/>
                <button>{!carForUpdate ? 'save' : 'update'}</button>
            </form>

        </div>
    );
};

export {CarForm};