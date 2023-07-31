import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layout";
import {CarsPage, CommentPage, PostsPage, WelcomePage} from "./pages";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <WelcomePage />,
            },
            {
                path: '/posts',
                element: <PostsPage />
            },
            {
                path: '/comments',
                element: <CommentPage />
            },
            {
                path: '/cars',
                element: <CarsPage />
            }
        ]
    }
])