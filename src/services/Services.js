import axios from "axios";
import {Endpoints} from "../api/Endpoints";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Services = {
    createUser: (data) => {
        instance.post(Endpoints.USERS, data)
            .then((data)=> console.log(data.data))
    },
    createComment: (data) => {
        instance.post(Endpoints.COMMENTS, data)
            .then((data)=> console.log(data.data))
    }
}
