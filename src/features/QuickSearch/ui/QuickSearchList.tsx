import { ReactNode, useMemo } from 'react';
import { cn } from '@/shared/lib/css';
import { MangaCardInlineSkeleton } from '@/entities/ComicList';

interface QuickSearchListProps<T extends object> {
    className?: string;
    list: T[];
    renderItem: (item: T) => ReactNode;
    isLoading?: boolean;
}

export const QuickSearchList = <T extends object>(props: QuickSearchListProps<T>) => {
    const { className, list, renderItem, isLoading } = props;

    const skeletons = useMemo(() => {
        return Array(6)
            .fill(0)
            .map((_, ind) => <MangaCardInlineSkeleton key={ind} />);
    }, []);

    return (
        <div className={cn('grid  grid-cols-1 min-[540px]:grid-cols-2', className)}>
            {isLoading ? skeletons.map((sk) => sk) : list.map(renderItem)}
        </div>
    );
};
