import React from "react";

import * as Utils from "utils";

type CustomProps = {
    type?: "horizontal" | "vertical";
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<"div">, keyof CustomProps>

export const Divider = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLDivElement>) => {
    const {
        className,
        type = "horizontal",
        ...rest
    } = props;

    const rootClassName = Utils.Styles.clsx("uiDivider", type === "horizontal" ? "uiDivider-horizontal" : "uiDivider-vertical", className);

    return (
        <div ref={forwardedRef}
            className={rootClassName}
            {...rest}>
        </div>

    );
});

Divider.displayName = "Divider";    