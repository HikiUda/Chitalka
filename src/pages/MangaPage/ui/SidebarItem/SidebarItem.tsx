import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Heading } from '@/shared/ui/Heading';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string;
    title?: string;
    children?: ReactNode;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { className, title, children } = props;

    return (
        <VStack gap="4" className={classNames('', {}, [className])}>
            <Heading HeadingTag="h5" className={cls.title}>
                {title}
            </Heading>
            <HStack wrap="wrap" justify="start" max>
                {children}
            </HStack>
        </VStack>
    );
});
