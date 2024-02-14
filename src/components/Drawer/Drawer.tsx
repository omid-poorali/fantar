import "./Drawer.scss";
import { useState } from "react";
import { LucidIcon, Icon } from "../LucidIcon";
import * as Utils from "utils";
import { Divider } from "components/Divider";

const menuItems: { name: string; iconName: Icon }[] = [
  {
    name: "Explore New",
    iconName: "LuHome"
  },
  {
    name: "Category",
    iconName: "LuList"
  },
  {
    name: "Popular Product",
    iconName: "LuTrendingUp"
  },
  {
    name: "Living and Gifts",
    iconName: "LuGift"
  }
];

type PropsType = {
  className?: string;
};

export const Drawer = (props: PropsType) => {

  const {
    className
  } = props;


  const [active, setActive] = useState(1);
  // const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(true);

  // let delay = 1;
  // useEffect(() => {
  //   setAnimate(true);
  //   let timer = setTimeout(() => setAnimate(false), delay * 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [active, delay]);

  const classes = {
    root: Utils.Styles.clsx("uiDrawer", expanded && "uiDrawer--expanded", className),
    title: Utils.Styles.clsx("uiDrawer-title", expanded && "uiDrawer-title--show"),
    logo: "uiDrawer-logo",
    nav: "uiDrawer-nav",
    list: "uiDrawer-list",
    item: "uiDrawer-item"
  }

  return (
    <section className={classes.root}>

      <div
        className={Utils.Styles.clsx(classes.logo,classes.item)}
        onClick={() => setExpanded(currentValue => !currentValue)}>
        <LucidIcon
          size={24}
          iconName="LuSettings"
        ></LucidIcon>
        <strong
          className={classes.title}>
          Fantar
        </strong>
      </div>

      <nav className={classes.nav}>
        <ul className={classes.list}>
          {menuItems.map((item, index) => {

            return (
              <li
                key={index}
                data-active={active === index}
                className={classes.item}
                onClick={() => setActive(index)}
              >
                <LucidIcon
                  size={24}
                  iconName={item.iconName}
                ></LucidIcon>
                <p
                  className={classes.title}>
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>

      <Divider />


    </section>
  );
};