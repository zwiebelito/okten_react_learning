import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <h4>Id: {id}</h4>
            <div>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Year: {year}</p>
            </div>
        </div>
    );
};

export {Car};