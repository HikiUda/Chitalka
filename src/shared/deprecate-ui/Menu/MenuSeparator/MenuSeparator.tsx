import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Separator } from 'react-aria-components';
import cls from './MenuSeparator.module.scss';

interface MenuSeparatorProps {
    className?: string;
}

export const MenuSeparator: FC<MenuSeparatorProps> = (props) => {
    const { className } = props;

    return <Separator className={classNames(cls.MenuSeparator, {}, [className])} />;
};
