import React from "react";
import { UserMenu } from "./UserMenu";
import { DarkModeToggle, LucidIcon } from "components";

import { LanSwitch } from "./LanSwitch";

import * as Utils from "utils";

type CustomProps = {
    onSettingsClick: () => void;
}

type PropsType = CustomProps & React.ComponentPropsWithoutRef<"header">

export const Header = (props: PropsType) => {

    const {
        className,
        onSettingsClick,
        ...rest
    } = props;

    const classes = {
        root: Utils.Styles.clsx("uiHeader", className),
        logo: "uiHeader-logo",
        part: "uiHeader-part"
    };

    return (
        <header className={classes.root} {...rest}>
            <button
                className={classes.logo}
                onClick={onSettingsClick}>
                <LucidIcon
                    size={24}
                    iconName="LuSettings"
                ></LucidIcon>
                <strong>Fantar</strong>
            </button>

            <LanSwitch className={classes.part} />

            <div className={classes.part}>
                <DarkModeToggle />
                <UserMenu />
            </div>
        </header>
    )
}