import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { getStyleScrollbar } from '@packages/ui/src/shared/StyleHooks';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    return (
        <VStack
            justify="start"
            className={classNames(cls.Sidebar, {}, [
                className,
                getStyleScrollbar({ size: 'thin' }),
            ])}
        >
            <SidebarItem title="Type">
                <AppLink underlineOnHover to="">
                    Manga
                </AppLink>
            </SidebarItem>
            <SidebarItem title="Status">
                <AppLink to="">Continue</AppLink>
            </SidebarItem>
            <SidebarItem title="Authors">
                <AppLink to="">wendsew</AppLink>
                <AppLink to="">HikiUda</AppLink>
            </SidebarItem>
            <SidebarItem title="Other titles">
                <span>title 1</span>
                <span>title 2</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur
                    necessitatibus magni tempore aperiam iste nisi et ad voluptatem, suscipit ullam
                    delectus, iusto quis non!
                </span>
                <span>title 4</span>
                <span>title 5</span>
                <span>title 6</span>
            </SidebarItem>
        </VStack>
    );
});
