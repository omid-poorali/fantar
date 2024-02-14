import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LucidIcon, Icon } from "../LucidIcon";
import * as Utils from "utils";

type NavItems = { name: string; iconName: Icon }[];

type PropsType = {
  className?: string;
  expanded?: boolean;
};

export const DrawerNav = (props: PropsType) => {

  const {
    className,
    expanded = true
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

  const classes = {
    root: Utils.Styles.clsx("uiDrawerNav", className),
    title: Utils.Styles.clsx("uiDrawerNav-title", expanded && "uiDrawerNav-title--show"),
    list: "uiDrawerNav-list",
    item: "uiDrawerNav-item",
    link: "uiDrawerNav-link"
  }

  return (
    <nav className={classes.root}>
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
  );
};