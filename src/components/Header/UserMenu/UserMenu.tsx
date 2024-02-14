
import { useTranslation } from "react-i18next";
import { Avatar } from "components";

const classes = {
    root: "uiUserMenu",
    avatar: "uiUserMenu-avatar",
    title: "uiUserMenu-title"
}

export default function UserMenu() {

    const { t } = useTranslation();

    return (
        <button className={classes.root}>
            <Avatar className={classes.avatar} />
            <span className={classes.title}>{t("name")}</span>
        </button>
    );
}