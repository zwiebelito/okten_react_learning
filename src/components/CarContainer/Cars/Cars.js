import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";
import {Services} from "../../../Services/Services";

const Cars = ({onSave, setOnSave, setCarForUpdate}) => {
    const [cars, setCars] = useState([])
    useEffect(()=> {
        Services.getCars()
            .then(data => setCars(data))
    },[onSave])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;