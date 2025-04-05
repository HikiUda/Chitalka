import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Button as AButton } from 'react-aria-components';
import type { ButtonProps as AButtonProps } from 'react-aria-components';
import cls from './Button.module.scss';

type ButtonTheme = 'clear' | 'outline' | 'fill';
type ButtonColor = 'primary' | 'secondary' | 'none';
type ButtonPressAnimation = 'none' | 'ripple' | 'press';
type ButtonHoverAnimation = 'scale' | 'none';

interface ButtonProps extends AButtonProps {
    className?: string;
    theme?: ButtonTheme;
    color?: ButtonColor;
    noHover?: boolean;
    pressAnimation?: ButtonPressAnimation;
    hoverAnimation?: ButtonHoverAnimation;
    max?: boolean;
    bold?: boolean;
    italic?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        color = 'primary',
        noHover,
        theme = 'clear',
        pressAnimation = 'none',
        hoverAnimation = 'none',
        max,
        bold,
        italic,
        ...otherProps
    } = props;

    return (
        <AButton
            className={classNames(
                cls.Button,
                { [cls.bgHover]: !noHover, [cls.max]: max, [cls.bold]: bold, [cls.italic]: italic },
                [className, cls[color], cls[theme], cls[pressAnimation], cls[hoverAnimation]],
            )}
            {...otherProps}
        >
            {children}
        </AButton>
    );
};
