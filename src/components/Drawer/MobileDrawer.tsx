import { LucidIcon } from "../LucidIcon";
import { Divider } from "components/Divider";
import { DrawerNav } from "./Nav";
import * as Utils from "utils";


type PropsType = {
  className?: string;
};

export const MobileDrawer = (props: PropsType) => {

  const {
    className
  } = props;

  const classes = {
    root: Utils.Styles.clsx("uiMobileDrawer", className),
    title: "uiMobileDrawer-title",
    logo: "uiMobileDrawer-logo",
  }

  return (
    <section className={classes.root}>

      <div className={classes.logo}>
        <LucidIcon
          size={24}
          iconName="LuSettings"
        ></LucidIcon>
        <strong
          className={classes.title}>
          Fantar
        </strong>
      </div>

      <DrawerNav />
      <Divider />
    </section>
  );
};