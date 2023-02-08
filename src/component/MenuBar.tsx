import { paths } from "../router";

export const MenuBar = () => {
    return (
        <div className="bg-slate-900 w-fit h-screen p-5 flex flex-col gap-6">
            <button
                className={
                    "text-3xl bg-slate-800 p-3 rounded-md hover:bg-slate-700 transition-all text-left"
                }
            >
                ヨダカの部屋
            </button>
            <div className="w-fit flex flex-col gap-2">
                {menu.map((m, idx) => (
                    <button
                        key={`menu_${idx}`}
                        className={
                            "text-lg bg-slate-800 p-3 rounded-md hover:bg-slate-700 transition-all text-left"
                        }
                    >
                        {m.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

type Menu = {
    label: string;
    path: string;
};
const menu: Menu[] = [
    {
        label: "作品",
        path: paths.root,
    },
    {
        label: "記事",
        path: paths.root,
    },
    {
        label: "プロフィール",
        path: paths.root,
    },
];
