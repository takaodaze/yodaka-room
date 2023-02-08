import { paths } from "../constant/paths";

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

export const MenuBar = () => {
    return (
        <div className="w-fit h-screen bg-slate-900 p-5 flex flex-col gap-6">
            <button
                className={
                    "text-3xl bg-slate-800 p-3 rounded-md hover:bg-slate-700 transition-all text-left"
                }
            >
                ヨダカの部屋
            </button>
            <div className="w-fit flex flex-col gap-2">
                {menu.map((m, idx) => (
                    <a
                        key={`menu_${idx}`}
                        className={"text-lg underline cursor-pointer"}
                    >
                        {m.label}
                    </a>
                ))}
            </div>
        </div>
    );
};
