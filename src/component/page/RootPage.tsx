import { Outlet } from "react-router-dom";

export const RootPage = () => {
    return (
        <div className="text-slate-200 ">
            <Outlet />
        </div>
    );
};
