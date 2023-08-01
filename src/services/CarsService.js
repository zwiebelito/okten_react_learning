import axios from "axios";

const baseCarURL = 'http://owu.linkpc.net/carsAPI/v1/cars'

const instance = axios.create({
    baseURL: baseCarURL
})

export const CarsService = {
    getAll: () => instance.get(baseCarURL).then(response => response.data)
}