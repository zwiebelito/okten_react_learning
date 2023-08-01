import React from 'react';
class Car extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
        const {id, brand, price, year} = this.props.car;
        return (
            <div>
                <h4>Id: {id}</h4>
                <div>
                    <p>Brand: {brand}</p>
                    <p>Price: {price}</p>
                    <p>Year: {year}</p>
                </div>
            </div>
        )
    }
}

export {Car}