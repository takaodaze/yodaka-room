import { paths } from "../router";

export const MenuBar = () => {
    return (
        <div className="bg-slate-900 w-fit h-screen flex flex-col gap-4 p-5">
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
    );
};

type Menu = {
    label: string;
    path: string;
};
const menu: Menu[] = [
    {
        label: "ヨダカの部屋",
        path: paths.root,
    },
    {
        label: "作品?",
        path: paths.root,
    },
    {
        label: "ここは？",
        path: paths.root,
    },
    {
        label: "あなたは?",
        path: paths.root,
    },
];
