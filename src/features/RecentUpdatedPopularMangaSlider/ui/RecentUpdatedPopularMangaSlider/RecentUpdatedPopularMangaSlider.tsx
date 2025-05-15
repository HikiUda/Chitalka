import { FC, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import cls from './RecentUpdatedPopularMangaSlider.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { CardBlock } from '@/shared/deprecate-ui/CardBlock';
import { Slider } from '@/entities/Slider';
import { LastChapterMangaCard, MangaCardSkeleton } from '@/entities/MangaCard';
import { LastUpdatedMangaApi } from '@/shared/api/deprecated/mangaList';

interface RecentUpdatedPopularMangaSliderProps {
    className?: string;
}

export const RecentUpdatedPopularMangaSlider: FC<RecentUpdatedPopularMangaSliderProps> = (
    props,
) => {
    const { className } = props;
    const { data, isLoading } = useInfiniteQuery(
        LastUpdatedMangaApi.getLastUpdatedInfinityQueryOptions('popular', 15),
    );
    const slides = useMemo(() => {
        if (!data && isLoading) {
            return Array(8).fill(<MangaCardSkeleton />);
        }
        if (!data) return [];
        return data.map((manga) => {
            return <LastChapterMangaCard key={manga.id} manga={manga} />;
        });
    }, [data, isLoading]);

    return (
        <CardBlock className={classNames(cls.RecentUpdatedPopularMangaSlider, {}, [className])}>
            <Slider className={cls.slider} slides={slides} />
        </CardBlock>
    );
};
