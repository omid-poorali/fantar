import { IconBaseProps } from "react-icons";
import * as LucidIcons from "react-icons/lu";

export type Icon = keyof typeof LucidIcons;

type CustomProps = {
    iconName: Icon;
}

type PropsType = CustomProps & Omit<IconBaseProps, keyof CustomProps>

export const LucidIcon = (props: PropsType) => {
    const {
        iconName,
        ...rest 
    } = props;

    const Component = LucidIcons[iconName];

    return (
        <Component
            {...rest}
        />
    );
};

LucidIcon.displayName = "LucidIcon";