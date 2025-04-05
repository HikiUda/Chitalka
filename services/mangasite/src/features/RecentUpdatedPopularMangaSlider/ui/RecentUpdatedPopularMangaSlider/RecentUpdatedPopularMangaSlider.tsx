import { FC, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Slider } from '@packages/ui/src/entities/Slider';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { LastChapterMangaCard, MangaCardSkeleton } from '@packages/ui/src/entities/MangaCard';
import cls from './RecentUpdatedPopularMangaSlider.module.scss';
import { useGetLastUpdatedMangas } from '@/shared/api/useGetLastUpdatedMangas';

interface RecentUpdatedPopularMangaSliderProps {
    className?: string;
}
export const RecentUpdatedPopularMangaSlider: FC<RecentUpdatedPopularMangaSliderProps> = (
    props,
) => {
    const { className } = props;
    const { data, isLoading } = useGetLastUpdatedMangas('popular', 15);
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
