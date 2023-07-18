import React from 'react';
import {Services} from "../../../services/Services";

const Car = ({car, setOnSave, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    const deleteCar = () => {
        Services.deleteCars(id)
            .then(()=> {
            setOnSave(prev => !prev)
        })
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export default Car;