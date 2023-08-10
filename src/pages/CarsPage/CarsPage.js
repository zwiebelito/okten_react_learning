import React from 'react';
import {CarForm, Cars} from "../../components";

const CarsPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '150px'}}>
            <CarForm />
            <Cars />
        </div>
    );
};

export {CarsPage};