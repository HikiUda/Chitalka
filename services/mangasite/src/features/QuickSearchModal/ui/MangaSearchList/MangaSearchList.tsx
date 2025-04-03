import { memo, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import {
    StatisticsMangaCardInline,
    MangaListItemStatisticType,
    MangaCardInlineSkeleton,
} from '@packages/ui/src/entities/MangaCard';
import { Heading } from '@packages/ui/src/shared/Heading';
import cls from './MangaSearchList.module.scss';

interface MangaSearchListProps {
    className?: string;
    mangaList: MangaListItemStatisticType[];
    isLoading?: boolean;
}

export const MangaSearchList = memo((props: MangaSearchListProps) => {
    const { className, mangaList, isLoading } = props;

    const skeletons = useMemo(() => {
        return Array(6)
            .fill(0)
            .map((item, ind) => <MangaCardInlineSkeleton key={ind} />);
    }, []);

    if (!isLoading && !mangaList.length) {
        return (
            <Heading className={cls.notFound} color="primary" HeaderTag="h3">
                Тайтл не найден
            </Heading>
        );
    }

    return (
        <div className={classNames(cls.MangaSearchList, {}, [className])}>
            {isLoading
                ? skeletons.map((sk) => sk)
                : mangaList.map((manga) => (
                      <StatisticsMangaCardInline key={manga.id} manga={manga} />
                  ))}
        </div>
    );
});
