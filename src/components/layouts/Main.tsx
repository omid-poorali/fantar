import "./Main.scss";
import { Drawer } from "components";

type PropsType = {
    children: React.ReactNode;
};

const classes = {
    root: "MainLayout",
    drawer: "MainLayout-drawer",
    container: "MainLayout-container"
}

export const Main = (props: PropsType) => {
    return (
        <div className={classes.root}>
            <Drawer className={classes.drawer} />
            <div className={classes.container}>
                {props.children}
            </div>
        </div>
    )
}