import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions, deleteCarThunk} from "../../../redux";


const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = (id) => {
        dispatch(deleteCarThunk(id))
    }

    return (
        <div>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>Update</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car}