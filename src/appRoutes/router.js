import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../pages/AppLayout/AppLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../pages/MainPage/Main";
import Todos from "../pages/Todos/Todos";
import Albums from "../pages/Albums/Albums";
import Comments from "../pages/Comments/Comments";
import Post from "../pages/Post/Post";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/todos',
                element: <Todos />
            },
            {
                path: '/albums',
                element: <Albums />
            },
            {
                path: '/comments',
                element: <Comments />
            },
            {
                path: '/posts/:postId',
                element: <Post />
            }
        ]
    }
])