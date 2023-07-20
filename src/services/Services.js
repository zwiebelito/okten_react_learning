import axios from "axios";
import {Endpoints} from "../api/EndPoints";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Services = {
    getTodos: () => {
         return instance.get(Endpoints.TODOS).then(response => response.data)
    },
    getAlbums: () => {
        return instance.get(Endpoints.ALBUMS).then(response => response.data)
    },
    getComments: () => {
        return instance.get(Endpoints.COMMENTS).then(response => response.data)
    },
    getPosts: (id) => {
        return instance.get(Endpoints.POSTS).then(response => response.data)
    },
}