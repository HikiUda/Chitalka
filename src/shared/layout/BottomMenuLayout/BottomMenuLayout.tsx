import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useHideLayout } from '../HeaderLayout/useHideLayout';
import cls from './BottomMenuLayout.module.scss';

interface BottomMenuLayoutProps {
    className?: string;
    children?: ReactNode;
    mayHide?: boolean;
}

export const BottomMenuLayout: FC<BottomMenuLayoutProps> = (props) => {
    const { className, children, mayHide = false } = props;

    const { hidden } = useHideLayout(mayHide);

    return (
        <nav
            id="bottomMenu"
            className={classNames(cls.BottomMenuLayout, { [cls.hidden]: hidden }, [className])}
        >
            {children}
        </nav>
    );
};
