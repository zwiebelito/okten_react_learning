import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Todos from "../components/Todos/Todos";
import Albums from "../components/Albums/Albums";
import {AppRoutes} from "./AppRoutes";
import Comments from "../components/Comments/Comments";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <h2>Choose something from Navbar</h2>
            },
            {
                path: AppRoutes.TODOS,
                element: <Todos />
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums />
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments />
            },
        ]
    },
]);