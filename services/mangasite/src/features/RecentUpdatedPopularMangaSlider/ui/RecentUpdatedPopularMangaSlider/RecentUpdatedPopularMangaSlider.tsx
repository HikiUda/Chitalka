import { FC, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { useQuery } from '@tanstack/react-query';
import cls from './RecentUpdatedPopularMangaSlider.module.scss';
import { Slider } from '@/entities/Slider';
import { LastChapterMangaCard, MangaCardSkeleton } from '@/entities/MangaCard';
import { LastUpdatedMangaApi } from '@/shared/api/mangaList';

interface RecentUpdatedPopularMangaSliderProps {
    className?: string;
}

export const RecentUpdatedPopularMangaSlider: FC<RecentUpdatedPopularMangaSliderProps> = (
    props,
) => {
    const { className } = props;
    const { data, isLoading } = useQuery(
        LastUpdatedMangaApi.getLastUpdatedQueryOptions('popular', 15),
    );
    const slides = useMemo(() => {
        if (!data && isLoading) {
            return Array(8).fill(<MangaCardSkeleton />);
        }
        if (!data) return [];
        return data.data.map((manga) => {
            return <LastChapterMangaCard key={manga.id} manga={manga} />;
        });
    }, [data, isLoading]);

    return (
        <CardBlock className={classNames(cls.RecentUpdatedPopularMangaSlider, {}, [className])}>
            <Slider className={cls.slider} slides={slides} />
        </CardBlock>
    );
};
