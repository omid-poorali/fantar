import { LucidIcon } from "../LucidIcon";
import { Divider } from "components/Divider";
import { DrawerNav } from "./Nav";
import * as Utils from "utils";

type PropsType = {
  className?: string;
  expanded: boolean;
  onSettingsClick: () => void;
};

export const DesktopDrawer = (props: PropsType) => {

  const {
    className,
    expanded,
    onSettingsClick
  } = props;


  const classes = {
    root: Utils.Styles.clsx("uiDesktopDrawer", expanded && "uiDesktopDrawer--expanded", className),
    title: Utils.Styles.clsx("uiDesktopDrawer-title", expanded && "uiDesktopDrawer-title--show"),
    logo: "uiDesktopDrawer-logo",
    nav: "uiDesktopDrawer-nav",
    list: "uiDesktopDrawer-list",
    item: "uiDesktopDrawer-item",
    link: "uiDesktopDrawer-link"
  }

  return (
    <section className={classes.root}>

      <button
        className={classes.logo}
        onClick={onSettingsClick}>
        <LucidIcon
          size={24}
          iconName="LuSettings"
        ></LucidIcon>
        <strong
          className={classes.title}>
          Fantar
        </strong>
      </button>

      <DrawerNav expanded={expanded} />
      <Divider />
    </section>
  );
};