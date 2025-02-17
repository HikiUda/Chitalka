import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactNode;
    main: ReactNode;
    footer?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
    const { className, header, footer, main } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {header}
            {main}
            {footer}
        </div>
    );
};
