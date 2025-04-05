import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './BottomMenuLayout.module.scss';

interface BottomMenuLayoutProps {
    className?: string;
    children?: ReactNode;
}

export const BottomMenuLayout: FC<BottomMenuLayoutProps> = (props) => {
    const { className, children } = props;

    return (
        <nav id="bottomMenu" className={classNames(cls.BottomMenuLayout, {}, [className])}>
            {children}
        </nav>
    );
};
