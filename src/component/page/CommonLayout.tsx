import { Outlet } from "react-router-dom";
import { MenuBar } from "../MenuBar";

export const CommonLayout = () => {
    return (
        <div className="text-slate-200 flex">
            <MenuBar />
            <div className="flex-grow p-6">
                <Outlet />
            </div>
        </div>
    );
};
