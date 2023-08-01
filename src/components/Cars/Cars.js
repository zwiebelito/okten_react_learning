import React from 'react';
import {Car} from "./Car/Car";
import {CarsService} from "../../services/CarsService";

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

   componentDidMount() {
        CarsService.getAll().then(cars => this.setState({cars: cars}))
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