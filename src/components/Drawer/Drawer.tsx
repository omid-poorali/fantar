import "./Drawer.scss";
import React, { useCallback, useState } from "react";
import { LucidIcon, Icon } from "../LucidIcon";
import { Divider } from "components/Divider";

import * as Utils from "utils";
import { useTranslation } from "react-i18next";

type NavItems = { name: string; iconName: Icon }[];

type PropsType = {
  className?: string;
};

export const Drawer = (props: PropsType) => {

  const {
    className
  } = props;

  const { t } = useTranslation();

  const getNavItems = useCallback((): NavItems => ([
    {
      name: t("explore-new"),
      iconName: "LuHome"
    },
    {
      name: t("category"),
      iconName: "LuList"
    },
    {
      name: t("popular-product"),
      iconName: "LuTrendingUp"
    },
    {
      name: t("living-gifts"),
      iconName: "LuGift"
    }
  ]), [t]);

  const [expanded, setExpanded] = useState(true);

  const classes = {
    root: Utils.Styles.clsx("uiDrawer", expanded && "uiDrawer--expanded", className),
    title: Utils.Styles.clsx("uiDrawer-title", expanded && "uiDrawer-title--show"),
    logo: "uiDrawer-logo",
    nav: "uiDrawer-nav",
    list: "uiDrawer-list",
    item: "uiDrawer-item",
    link: "uiDrawer-link"
  }

  return (
    <section className={classes.root}>

      <button
        className={classes.logo}
        onClick={() => setExpanded(currentValue => !currentValue)}>
        <LucidIcon
          size={24}
          iconName="LuSettings"
        ></LucidIcon>
        <strong
          className={classes.title}>
          Fantar
        </strong>
      </button>

      <nav className={classes.nav}>
        <ul className={classes.list}>
          {React.Children.toArray(getNavItems().map((item, index) => {
            return (
              <li
                data-active={index === 1}
                className={classes.item}>
                <a
                  href="/"
                  className={classes.link}
                  onClick={e => e.preventDefault()}>
                  <LucidIcon
                    size={24}
                    iconName={item.iconName}
                  ></LucidIcon>
                  <p
                    className={classes.title}>
                    {item.name}
                  </p>
                </a>
              </li>
            );
          }))}
        </ul>
      </nav>
      <Divider />
    </section>
  );
};