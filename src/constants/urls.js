const baseURL = 'https://api.themoviedb.org/3';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmU4MWYyYjRlYzU3OWNhNWVhNGNjYzlmZDZiZjEwYyIsInN1YiI6IjY0YmY4NjI2OGVlNDljMGZjYWY3Y2NmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Qz7o1zsdySVFlZLTmpqxcwfv632G-tHt802SL-_i_s'

const movies = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';

const urls = {
    movie: {
        byId: (id) => `${movie}/${id}`
    },
    movies: {
        byPage: (page) => `${movies}?page=${page}`
    },
    genres
}

export {baseURL, urls, token}