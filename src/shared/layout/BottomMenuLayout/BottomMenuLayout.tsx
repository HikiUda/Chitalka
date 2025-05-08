import { FC, ReactNode } from 'react';
import cls from './BottomMenuLayout.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';

interface BottomMenuLayoutProps {
    className?: string;
    children?: ReactNode;
    hidden?: boolean;
}

export const BottomMenuLayout: FC<BottomMenuLayoutProps> = (props) => {
    const { className, children, hidden = false } = props;

    return (
        <nav
            id="bottomMenu"
            className={classNames(cls.BottomMenuLayout, { [cls.hidden]: hidden }, [className])}
        >
            {children}
        </nav>
    );
};
