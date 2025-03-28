import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Button } from '@packages/ui/src/shared/Button';
import { getStyleScrollbar } from '@packages/ui/src/shared/StyleHooks';
import cls from './TabScroll.module.scss';

interface TabScrollProps {
    className?: string;
    children?: ReactNode;
    callback?: () => void;
}

export const TabScroll: FC<TabScrollProps> = (props) => {
    const { className, children, callback } = props;

    return (
        <div
            className={classNames(cls.TabScroll, {}, [
                className,
                getStyleScrollbar({ size: 'thin' }),
            ])}
        >
            {children}
            <Button max onPress={callback} theme="fill">
                Показать еще
            </Button>
        </div>
    );
};
