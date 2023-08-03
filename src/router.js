import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {Task1Page} from "./pages/Task1Page/Task1Page";
import {Task2Page} from "./pages/Task2Page/Task2Page";
import {Task3Page} from "./pages/Task3Page/Task3Page";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {Task5Page} from "./pages/Task5Page/Task5Page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/task1',
                element: <Task1Page />
            },
            {
                path: '/task2',
                element: <Task2Page />
            },
            {
                path: '/task3',
                element: <Task3Page />
            },
            {
                path: '/task4Users',
                element: <UsersPage />
            },
            {
                path: '/task4Posts',
                element: <PostsPage />
            },
            {
                path: '/task4Comments',
                element: <CommentsPage />
            },
            {
                path: '/task5',
                element: <Task5Page />
            }
        ]
    }
])