import "./Header.scss";
import React from "react";
import { UserMenu } from "./UserMenu";
import { DarkModeToggle } from "components";

import { LanSwitch } from "./LanSwitch";

import * as Utils from "utils";

type PropsType = React.ComponentPropsWithoutRef<"header">

export const Header = (props: PropsType) => {

    const { className, ...rest } = props;

    const classes = {
        root: Utils.Styles.clsx("uiHeader", className),
        logo: "uiHeader-logo",
        part: "uiHeader-part"
    };

    return (
        <header className={classes.root} {...rest}>
            <div style={{ opacity: 0 }} className={classes.part}>SearchField</div>

            <LanSwitch className={classes.part} />

            <div className={classes.part}>
                <DarkModeToggle />
                <UserMenu />
            </div>
        </header>
    )
}