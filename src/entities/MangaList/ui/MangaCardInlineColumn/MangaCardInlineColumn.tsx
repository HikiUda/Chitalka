import { ReactNode, useMemo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { MangaCardInlineSkeleton } from '@/entities/MangaCard';

interface MangaCardInlineColumnProps<T> {
    className?: string;
    list: T[];
    renderItem: (item: T, ind: number) => ReactNode;
    isLoading?: boolean;
    skeletonsCount?: number;
    skeletonClassName?: string;
}

export const MangaCardInlineColumn = <T extends object>(props: MangaCardInlineColumnProps<T>) => {
    const { className, list, renderItem, isLoading, skeletonsCount = 3, skeletonClassName } = props;

    const skeletons = useMemo(() => {
        return Array(skeletonsCount)
            .fill(0)
            .map((sk, ind) => <MangaCardInlineSkeleton key={ind} className={skeletonClassName} />);
    }, [skeletonClassName, skeletonsCount]);

    return (
        <VStack max className={className}>
            {list.map(renderItem)}
            {isLoading && skeletons.map((sk) => sk)}
        </VStack>
    );
};
