import "./UserMenu.scss";
import { Avatar } from "components";

const classes = {
    root: "uiUserMenu",
    avatar: "uiUserMenu-avatar",
    title: "uiUserMenu-title"
}

export default function UserMenu() {

    return (
        <button className={classes.root}>
            <Avatar className={classes.avatar}/>
            <span className={classes.title}>Omid Poorali</span>
        </button>
    );
}