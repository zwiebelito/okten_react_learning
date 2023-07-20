const baseURL = 'https://jsonplaceholder.typicode.com';
const todos = '/todos';
const albums = '/albums';
const comments = '/comments';
const posts = '/posts';

const urls = {
    todos: {
        base: todos
    },
    albums: {
        base: albums
    },
    comments: {
        base: comments
    },
    posts: {
        base: posts,
        byId: id => `${posts}/${id}`
    }
}

export {baseURL, urls}