import React, { useLayoutEffect, useState } from "react";
import { IconButton, LucidIcon } from "components";
import { Enums } from "commons";

import * as Utils from "utils";


type CustomProps = {
    className?: string | undefined;
}

type DarkModeToggleProps = CustomProps & Omit<React.ComponentPropsWithoutRef<"button">, keyof CustomProps>;


export const DarkModeToggle = React.forwardRef<HTMLButtonElement, DarkModeToggleProps>((props, ref) => {
    const {
        className,
        ...rest
    } = props;


    const [theme, setTheme] = useState<Enums.Theme>()

    const toggleTheme = () => {
        if (theme == Enums.Theme.LIGHT) {
            setTheme(Enums.Theme.DARK)
        }
        else setTheme(Enums.Theme.LIGHT)
    }


    const maybeTheme = () => {
        const themeLocalStorage = localStorage.getItem("theme")
        const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches ? Enums.Theme.DARK : Enums.Theme.LIGHT

        return (themeLocalStorage ?? themeSystem ?? "light") as Enums.Theme
    }

    useLayoutEffect(() => {
        const currentTheme = theme ?? maybeTheme();
        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorage.setItem("theme", currentTheme)
        setTheme(currentTheme)

        const useSetTheme = (e: MediaQueryListEvent) => { setTheme(e.matches ? Enums.Theme.DARK : Enums.Theme.LIGHT) }

        const watchSysTheme = window.matchMedia("(prefers-color-scheme: dark)")

        watchSysTheme.addEventListener("change", useSetTheme)

        return () => watchSysTheme.removeEventListener("change", useSetTheme);
    }, [theme])

    const classes = {
        root: Utils.Styles.clsx("uiDarkModeToggle", className)
    }


    return (
        <IconButton
            ref={ref}
            className={classes.root}
            aria-label="Dark mode toggle"
            {...rest}
            onClick={toggleTheme}>
            {theme === Enums.Theme.DARK ? <LucidIcon size={25} iconName="LuSun" /> : <LucidIcon size={25} iconName="LuMoon" />}
        </IconButton>
    )
})

DarkModeToggle.displayName = "DarkModeToggle";