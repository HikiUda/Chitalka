import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import {
    StatisticsMangaCardInline,
    MangaListItemStatistic,
    MangaCardInlineSkeleton,
} from '@packages/ui/src/entities/MangaCard';
import cls from './MangaSearchList.module.scss';

interface MangaSearchListProps {
    className?: string;
    mangaList: MangaListItemStatistic[];
    isLoading?: boolean;
}

export const MangaSearchList = memo((props: MangaSearchListProps) => {
    const { className, mangaList, isLoading } = props;

    return (
        <div className={classNames(cls.MangaSearchList, {}, [className])}>
            {isLoading
                ? Array(6)
                      .fill(0)
                      .map((item, ind) => <MangaCardInlineSkeleton key={ind} />)
                : mangaList.map((manga) => (
                      <StatisticsMangaCardInline key={manga.id} manga={manga} />
                  ))}
        </div>
    );
});
