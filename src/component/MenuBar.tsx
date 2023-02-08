import { Link } from "react-router-dom";

import { paths } from "../constant/paths";

type Menu = {
    label: string;
    path: string;
};

const menu: Menu[] = [
    {
        label: "作品",
        path: paths.works,
    },
    {
        label: "記事",
        path: paths.characters,
    },
    {
        label: "プロフィール",
        path: paths.profile,
    },
];

export const MenuBar = () => {
    return (
        <div className="w-fit h-screen bg-slate-900 p-5 flex flex-col gap-6">
            <Link to={paths.root}>
                <button
                    className={
                        "text-3xl bg-slate-800 p-3 rounded-md hover:bg-slate-700 transition-all text-left"
                    }
                >
                    ヨダカの部屋
                </button>
            </Link>
            <div className="w-fit flex flex-col gap-2">
                {menu.map((m, idx) => (
                    <Link
                        key={`menu_${idx}`}
                        className={"text-lg underline cursor-pointer"}
                        to={m.path}
                    >
                        {m.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};
