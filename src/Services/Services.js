import axios from "axios";
import {EndPoints} from "../API/EndPoints";


const instance = axios.create({
    baseURL: EndPoints.CARS
})

export const Services = {
    deleteCars: (id, setOnSave) => {
        instance.delete(`/${id}`)
            .then(()=> {
                setOnSave(prev => !prev)
            })
    },

    updateCars: (car, id) => {
        return instance.put(`/${id}`, car);
    },

    postCar: car => {
        return instance.post(EndPoints.CARS, car);
    },

    getCars: () => {
        return instance.get(EndPoints.CARS).then(response => response.data);
    },

}

