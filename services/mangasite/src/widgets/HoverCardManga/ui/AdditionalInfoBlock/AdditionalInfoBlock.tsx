import { FC, ReactNode } from 'react';
import { Heading } from '@packages/ui/src/shared/Heading';
import { VStack } from '@packages/ui/src/shared/Stack';

interface AdditionalInfoBlockProps {
    className?: string;
    title?: string;
    content?: ReactNode;
}

export const AdditionalInfoBlock: FC<AdditionalInfoBlockProps> = (props) => {
    const { className, title, content } = props;

    return (
        <VStack gap="4" align="center" className={className}>
            <Heading HeadingTag="h5">{title}</Heading>
            {content}
        </VStack>
    );
};
