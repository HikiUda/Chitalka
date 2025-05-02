import { ReactNode, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useTrottle } from '@packages/model/src/lib/hooks/useTrottle';
import { useIntersection } from '@packages/model/src/lib/hooks/useIntersection';
import { ChapterListItemSkeleton } from '../ChapterListItemSkeleton/ChapterListItemSkeleton';
import cls from './ChapterList.module.scss';

interface ChapterListProps<T> {
    className?: string;
    chapters: T[];
    renderChapter: (chapter: T) => ReactNode;
    fetchNextPage?: () => void;
    isLoading?: boolean;
    skeletonsCount?: number;
}

export const ChapterList = <T extends object>(props: ChapterListProps<T>) => {
    const { className, chapters, renderChapter, isLoading, skeletonsCount, fetchNextPage } = props;
    const trottleIntersect = useTrottle(() => fetchNextPage?.(), 1000);
    const intersect = useIntersection(() => {
        trottleIntersect();
    });

    const skeletons = useMemo(() => {
        return Array(skeletonsCount)
            .fill(0)
            .map((sk, ind) => <ChapterListItemSkeleton key={ind + 'sk'} />);
    }, [skeletonsCount]);

    return (
        <div className={classNames(cls.ChapterList, {}, [className])}>
            {chapters.map(renderChapter)}
            {isLoading && skeletons.map((sk) => sk)}
            <div ref={intersect} style={{ height: 1 }} />
        </div>
    );
};
