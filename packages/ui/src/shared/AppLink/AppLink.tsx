import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import { LinkProps, Link } from 'react-router-dom';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'text' | 'primary' | 'secondary' | 'none';
type AppLinkStyle = 'normal' | 'bold' | 'italic';

export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    textStyle?: AppLinkStyle;
    backgroundOnHover?: boolean;
    children: ReactNode;
    disable?: boolean;
    underlineOnHover?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = 'text',
        textStyle = 'normal',
        backgroundOnHover,
        disable,
        underlineOnHover,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(
                cls.AppLink,
                {
                    [cls.background]: backgroundOnHover,
                    [cls.disable]: disable,
                    [cls.underline]: underlineOnHover,
                },
                [className, cls[theme], cls[textStyle]],
            )}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
