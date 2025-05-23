import { FC, ReactNode } from 'react';
import { VStack } from '@/shared/deprecate-ui/Stack';
import { Heading } from '@/shared/deprecate-ui/Heading';

interface RangeWrapperProps {
    className?: string;
    title?: string;
    children?: ReactNode;
}

export const RangeWrapper: FC<RangeWrapperProps> = (props) => {
    const { className, title, children } = props;

    return (
        <VStack className={className}>
            <Heading>{title}</Heading>
            {children}
        </VStack>
    );
};
