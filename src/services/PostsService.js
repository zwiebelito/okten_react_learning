import axios from "axios";

const basePostURL = 'https://jsonplaceholder.typicode.com/posts'

const instance = axios.create({
    baseURL: basePostURL
})

export const PostsService = {
    getAll: () => instance.get(basePostURL).then(response => response.data)
}