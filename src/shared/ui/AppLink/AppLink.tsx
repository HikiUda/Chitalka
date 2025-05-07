import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { LinkProps, Link } from 'react-router-dom';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'text' | 'primary' | 'secondary';

export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    backgroundOnHover?: boolean;
    children: ReactNode;
    disable?: boolean;
    underlineOnHover?: boolean;
    noOpacityHover?: boolean;
    bold?: boolean;
    italic?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = 'text',
        backgroundOnHover,
        disable,
        underlineOnHover,
        bold,
        italic,
        noOpacityHover,
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
                    [cls.italic]: italic,
                    [cls.opacityHover]: !noOpacityHover,
                    [cls.bold]: bold,
                },
                [className, cls[theme]],
            )}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
