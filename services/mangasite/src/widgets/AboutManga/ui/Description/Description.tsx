import { memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { TextDisclosure } from '@packages/ui/src/shared/TextDisclosure';

interface DescriptionProps {
    className?: string;
    description?: string;
    isLoading?: boolean;
}

export const Description = memo((props: DescriptionProps) => {
    const { className, isLoading, description } = props;

    return (
        <>
            {isLoading ? (
                <div className={className}>
                    <Skeleton height={120} />
                </div>
            ) : (
                <TextDisclosure
                    className={className}
                    text={description || 'Описание отсутствует'}
                />
            )}
        </>
    );
});
