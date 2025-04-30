import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <h2>Home</h2>,
            errorElement: <div>Error</div>,
        },
        {
            path: "/auth",
            element: <h2>Auth</h2>,
        },
        {
            path: "/news",
            element: <h2>News</h2>,
        }

    ]
)