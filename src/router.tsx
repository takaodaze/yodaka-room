import { createBrowserRouter } from "react-router-dom";

import { RootPage } from "./component/page/RootPage";
import { CommonLayout } from "./component/page/CommonLayout";
import { paths } from "./constant/paths";
import { ProfilePage } from "./component/page/ProfilePage";

export const router = createBrowserRouter([
    {
        path: paths.root,
        element: <CommonLayout />,
        children: [
            {
                path: paths.root,
                element: <RootPage />,
            },
            {
                path: paths.works,
                element: <>まだ何もありません;</>,
            },
            {
                path: paths.characters,
                element: (
                    <>
                        まだ何もありません;
                        <p>
                            ハロープラネット的な世界で誰かと手紙やりとりできるゲーム？つくりたい
                        </p>
                    </>
                ),
            },
            {
                path: paths.profile,
                element: <ProfilePage />,
            },
        ],
    },
]);
