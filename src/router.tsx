import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "./component/page/RootPage";
import { HomePage } from "./HomePage";

export const paths = {
    root: "/",
} as const;

export const router = createBrowserRouter([
    {
        path: paths.root,
        element: <RootPage />,
        children: [
            {
                path: paths.root,
                element: <HomePage />,
            },
        ],
    },
]);
