import { PropsWithChildren } from "react";
import { MenuBar } from "./MenuBar";

export const Layout = (props: PropsWithChildren) => {
    return <div className="p-4">{props.children}</div>;
};
