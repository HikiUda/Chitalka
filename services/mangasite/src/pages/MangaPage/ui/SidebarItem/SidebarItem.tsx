import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
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
