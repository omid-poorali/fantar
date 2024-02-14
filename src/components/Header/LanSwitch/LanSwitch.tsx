import React, { useRef } from "react";
import { Option, TabMenu } from "components";
import { Enums } from "commons";


type PropsType = React.ComponentPropsWithoutRef<"div">

export const LanSwitch = (props: PropsType) => {

    const { className } = props;

    const lanItems = useRef<Option[]>([
        {
            label: "english",
            value: Enums.Language.ENGLISH,
        },
        {
            label: "فارسی",
            value: Enums.Language.PERSIAN
        }
    ]);


    return (
        <div className={className}>
            <TabMenu value={Enums.Language.ENGLISH} options={lanItems.current}/>
        </div>
    )
}