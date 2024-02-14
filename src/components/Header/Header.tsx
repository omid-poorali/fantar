import React from "react";
import { UserMenu } from "./UserMenu";
import { DarkModeToggle } from "components";
import * as Utils from "utils";

import "./Header.scss";


type PropsType = React.ComponentPropsWithoutRef<"div">

export const Header = (props: PropsType) => {

    const { className } = props;

    const classes = {
        root: Utils.Styles.clsx("uiHeader", className),
        logo: "uiHeader-logo",
        side: "uiHeader-side"
    };

    return (
        <header className={classes.root}>
            <div className={classes.side}>

            </div>

            <div className={classes.side}>
                <DarkModeToggle />
                <UserMenu />
            </div>
        </header>
    )
}