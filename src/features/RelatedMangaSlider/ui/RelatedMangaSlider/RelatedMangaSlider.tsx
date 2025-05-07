import { FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/ui/Stack';
import { Heading } from '@/shared/ui/Heading';
import { MangaIdType } from '@/shared/entities/manga';
import { useQuery } from '@tanstack/react-query';
import { RelatedMangaApi } from '../../model/api/relatedMangaApi';
import cls from './RelatedMangaSlider.module.scss';
import { Slider } from '@/entities/Slider';
import { MangaCardInlineSkeleton, StatisticsMangaCardInline } from '@/entities/MangaCard';

interface RelatedMangaSliderProps {
    className?: string;
    mangaId: MangaIdType;
}

export const RelatedMangaSlider: FC<RelatedMangaSliderProps> = (props) => {
    const { className, mangaId } = props;
    const { data, isLoading } = useQuery(RelatedMangaApi.getQueryOptions(mangaId));
    const slides = useMemo(() => {
        if (!data && isLoading) {
            return Array(6)
                .fill(0)
                .map((item, ind) => <MangaCardInlineSkeleton className={cls.card} key={ind} />);
        }
        if (!data) return [];
        return data.map((manga) => (
            <div key={manga.id} className={cls.card}>
                <StatisticsMangaCardInline manga={manga} />
            </div>
        ));
    }, [data, isLoading]);

    if (!data?.length && !isLoading) return null;

    return (
        <div
            className={classNames('', {}, [
                className,
                getFlex({ direction: 'column', max: true, align: 'start' }),
            ])}
        >
            <Heading className={cls.title} HeadingTag="h3" color="primary">
                Связаное
            </Heading>
            <Slider className={cls.slider} slides={slides} />
        </div>
    );
};
