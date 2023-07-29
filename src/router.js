import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";
import {MoviesByGenre} from "./components";


const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'/movies'}/>
            },
            {
                path: '/movies',
                element: <MoviesPage/>
            },
            {
                path: 'movies/:movieId',
                element: <MovieInfoPage/>
            },
            {
                path: '/genres',
                element: <GenresPage/>,
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

export {router}