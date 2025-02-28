import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import { LinkProps, Link } from 'react-router-dom';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'text' | 'primary' | 'secondary';
type AppLinkStyle = 'normal' | 'bold' | 'italic';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    textStyle?: AppLinkStyle;
    backgroundOnHover?: boolean;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = 'text',
        textStyle = 'normal',
        backgroundOnHover,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls.background]: backgroundOnHover }, [
                className,
                cls[theme],
                cls[textStyle],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
