import { FC, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import cls from './RecentUpdatedPopularMangaSlider.module.scss';
import { Slider } from '@/entities/Slider';
import { LastChapterMangaCard, MangaCardSkeleton } from '@/entities/MangaCard';
import { useGetLastUpdatedMangas } from '@/entities/MangaCard';

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
