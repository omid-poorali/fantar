import React, { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TabMenu } from "components";

type LanguageItem = {
    label: string;
    value: "en" | "fa";
    dir?: "ltr" | "rtl";
}

type PropsType = React.ComponentPropsWithoutRef<"div">

export const LanSwitch = (props: PropsType) => {

    const {
        className
    } = props;

    const { i18n } = useTranslation();

    const lanItems = useRef<LanguageItem[]>([
        {
            label: "english",
            value: "en",
            dir: "ltr"
        },
        {
            label: "فارسی",
            value: "fa",
            dir: "rtl"
        }
    ]);

    const [lan, setLan] = useState<LanguageItem>();

    useLayoutEffect(() => {
        const maybeLan = () => {
            const lanLocalStorage = localStorage.getItem("lan")
            return lanLocalStorage === "fa" ? lanItems.current[1]: lanItems.current[0]
        }
        const currentLan = lan ?? maybeLan();
        document.documentElement.setAttribute("lang", currentLan.value);
        document.documentElement.setAttribute("dir", currentLan?.dir ?? "ltr");
        localStorage.setItem("lan", currentLan.value);
        i18n.changeLanguage(currentLan.value);

    }, [lan])

    const handleLanChange = (selectedItem: LanguageItem) => {
        setLan(() => selectedItem);
    };

    return (
        <div className={className}>
            <TabMenu
                value={lan ?? "en"}
                options={lanItems.current}
                onChange={({ option: selectedItem }) => handleLanChange(selectedItem)} />
        </div>
    )
}