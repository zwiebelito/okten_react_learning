import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Todos from "../components/Todos/Todos";
import Albums from "../components/Albums/Albums";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <h2>Choose something from Navbar</h2>
            },
            {
                path: "/todos",
                element: <Todos />
            },
            {
                path: "/albums",
                element: <Albums />
            },
        ]
    },
]);