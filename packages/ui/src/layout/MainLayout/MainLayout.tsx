import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames/classNames';
import { Toast } from '@ui/shared/Toast';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactNode;
    main: ReactNode;
    footer?: ReactNode;
    bottomMenu?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
    const { className, header, footer, main, bottomMenu } = props;

    return (
        <div
            className={classNames(cls.MainLayout, { [cls.bottomMenu]: bottomMenu !== null }, [
                className,
            ])}
        >
            {header}
            {main}
            {footer}
            {bottomMenu}
            <Toast />
        </div>
    );
};
