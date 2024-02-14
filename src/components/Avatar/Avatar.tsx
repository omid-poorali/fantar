import React from "react";
import DefaultImage from "assets/avatar.jpg";

import * as Utils from "utils";


type CustomProps = {
    className?: string;
    imageUrl?: string;
    alt?: string;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<"div">, keyof CustomProps>

export const Avatar = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLDivElement>) => {
    const {
        className,
        imageUrl,
        alt = "avatar",
        ...rest
    } = props;

    const rootClassName = Utils.Styles.clsx("uiAvatar", className);

    return (
        <div ref={forwardedRef}
            className={rootClassName}
            {...rest}>
            <img
                src={imageUrl ? imageUrl : DefaultImage}
                alt={alt}
            />
        </div>

    );
});

Avatar.displayName = "Avatar";
