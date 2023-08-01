import axios from "axios";

const baseCommentURL = 'https://jsonplaceholder.typicode.com/comments'

const instance = axios.create({
    baseURL: baseCommentURL
})

export const CommentsService = {
    getAll: () => instance.get(baseCommentURL).then(response => response.data)
}