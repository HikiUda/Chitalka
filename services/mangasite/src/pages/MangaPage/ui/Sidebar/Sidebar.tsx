import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    return <VStack className={classNames(cls.Sidebar, {}, [className])}>dddddd</VStack>;
});
