import axios from "axios";
import {Endpoints} from "../api/Endpoints";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Services = {
    getUsers: (data) => {
        instance.post(Endpoints.USERS)
            .then((data)=> console.log(data.data))
    },
    getComments: (data) => {
        instance.post(Endpoints.COMMENTS)
            .then((data)=> console.log(data.data))
    }
}
