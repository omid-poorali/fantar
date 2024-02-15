import { LucidIcon } from "../LucidIcon";
import { Divider } from "components/Divider";
import { DrawerNav } from "./Nav";
import * as Utils from "utils";


type PropsType = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

export const MobileDrawer = (props: PropsType) => {

  const {
    className,
    open,
    onClose
  } = props;

  const classes = {
    root: Utils.Styles.clsx("uiMobileDrawer-root", className),
    main: Utils.Styles.clsx("uiMobileDrawer-main", open && "uiMobileDrawer-main--open"),
    overlay: Utils.Styles.clsx("uiMobileDrawer-overlay", open && "uiMobileDrawer-overlay--open"),
    section: "uiMobileDrawer-section",
    title: "uiMobileDrawer-title",
    logo: "uiMobileDrawer-logo",
  }

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <section className={classes.section}>
          <div onClick={onClose} className={classes.logo}>
            <LucidIcon
              size={24}
              iconName="LuSettings"
            ></LucidIcon>
            <strong className={classes.title}>
              Fantar
            </strong>
          </div>
          <DrawerNav />
          <Divider />
        </section>
      </div>
      <div className={classes.overlay} onClick={onClose}></div>
    </div>
  );
};