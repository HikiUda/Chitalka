import { ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import cls from './InfinityMangaList.module.scss';
import { MangaCardSkeleton } from '@/entities/MangaCard';

interface InfinityMangaListProps<T> {
    className?: string;
    list: T[];
    renderItem: (item: T) => ReactNode;
    fetchNextPage?: () => void;
    isLoading?: boolean;
    skeletonsNumber?: number;
}

export const InfinityMangaList = <T extends object>(props: InfinityMangaListProps<T>) => {
    const { className, list, renderItem, fetchNextPage, isLoading, skeletonsNumber = 20 } = props;

    const skeletons = useMemo(() => {
        return Array(skeletonsNumber)
            .fill(0)
            .map((item, ind) => <MangaCardSkeleton adaptive="dynamic" key={ind} />);
    }, [skeletonsNumber]);

    const trottleIntersect = useTrottle(() => fetchNextPage?.(), 1000);
    const intersect = useIntersection(() => trottleIntersect());

    //TODO Error
    if (!isLoading && !list.length) return <div>Error</div>;

    return (
        <div className={classNames(cls.InfinityMangaList, {}, [className])}>
            {list.map(renderItem)}
            {isLoading && skeletons.map((sk) => sk)}
            <div ref={intersect} />
        </div>
    );
};
