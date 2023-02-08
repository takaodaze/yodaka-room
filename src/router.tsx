import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

export const paths = {
    root: "/",
} as const;

export const router = createBrowserRouter([
    {
        path: paths.root,
        element: <HomePage />,
    },
]);
