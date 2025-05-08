import { FC, ReactNode } from 'react';
import cls from './MainLayout.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Toast } from '@/shared/ui/Toast';

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
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {header}
            {main}
            {footer}
            {bottomMenu}
            <Toast />
        </div>
    );
};
