import { useState } from "react";
import { DesktopDrawer, Header } from "components";

type PropsType = {
    children: React.ReactNode;
};

const classes = {
    root: "MainLayout",
    desktopDrawer: "MainLayout-desktopDrawer",
    mobileDrawer: "MainLayout-mobileDrawer",
    wrapper: "MainLayout-wrapper"
}

export const Main = (props: PropsType) => {
    const [expanded, setExpand] = useState(false);

    const changeExpand = () => setExpand(currentState => !currentState);

    return (
        <div className={classes.root}>
            <DesktopDrawer
                className={classes.desktopDrawer}
                expanded={expanded}
                onSettingsClick={changeExpand} />
            <div className={classes.wrapper}>
                <Header onSettingsClick={changeExpand}/>
                {props.children}
            </div>
        </div>
    )
}