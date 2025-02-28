import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Button as AButton } from 'react-aria-components';
import type { ButtonProps as AButtonProps } from 'react-aria-components';
import cls from './Button.module.scss';

type ButtonTheme = 'clear' | 'outline' | 'fill';
type ButtonColor = 'primary' | 'secondary' | 'none';
type ButtonPressAnimation = 'none' | 'ripple' | 'press';

interface ButtonProps extends AButtonProps {
    className?: string;
    theme?: ButtonTheme;
    color?: ButtonColor;
    noHover?: boolean;
    pressAnimation?: ButtonPressAnimation;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        color = 'primary',
        noHover,
        theme = 'clear',
        pressAnimation = 'none',
        ...otherProps
    } = props;

    return (
        <AButton
            className={classNames(cls.Button, { [cls.bgHover]: !noHover }, [
                className,
                cls[color],
                cls[theme],
                cls[pressAnimation],
            ])}
            {...otherProps}
        >
            {children}
        </AButton>
    );
};
