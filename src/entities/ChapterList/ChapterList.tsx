import { ReactNode, useMemo } from 'react';
import { ChapterListItemSkeleton } from './ChapterListItemSkeleton';

interface ChapterListProps<T> {
    className?: string;
    chapters: T[];
    renderChapter: (chapter: T) => ReactNode;
    action?: ReactNode;
    isLoading?: boolean;
    skeletonsCount?: number;
}

export const ChapterList = <T extends object>(props: ChapterListProps<T>) => {
    const { className, chapters, renderChapter, isLoading, skeletonsCount = 10, action } = props;

    const skeletons = useMemo(() => {
        return Array(skeletonsCount)
            .fill(0)
            .map((sk, ind) => <ChapterListItemSkeleton key={ind + 'sk'} />);
    }, [skeletonsCount]);

    return (
        <div className={className}>
            {chapters.map(renderChapter)}
            {isLoading && skeletons.map((sk) => sk)}
            {action}
        </div>
    );
};
