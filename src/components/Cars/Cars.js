import React from 'react';
import {Car} from "./Car/Car";

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

   componentDidMount() {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars').then((data) => data.json())
            .then(cars => this.setState({cars: cars}))
   }

    render() {
        const {cars} = this.state;
        return (
            <>
                {cars.map(car => <Car key={car.id}  car={car}/>)}
            </>
        )
    }
}

export {Cars};