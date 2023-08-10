import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {getCarsThunk} from "../../../redux";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    const getCars = () => dispatch(getCarsThunk());

    useEffect(() => {
        getCars();
    }, [])

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px'}}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars}