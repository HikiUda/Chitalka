import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import cls from './RangeWrapper.module.scss';

interface RangeWrapperProps {
    className?: string;
    title?: string;
    children?: ReactNode;
}

export const RangeWrapper: FC<RangeWrapperProps> = (props) => {
    const { className, title, children } = props;

    return (
        <VStack className={classNames(cls.RangeWrapper, {}, [className])}>
            <Heading>{title}</Heading>
            {children}
        </VStack>
    );
};
