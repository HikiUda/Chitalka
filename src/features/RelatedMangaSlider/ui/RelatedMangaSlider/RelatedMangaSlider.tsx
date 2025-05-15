import { FC, useMemo } from 'react';
import cls from './RelatedMangaSlider.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { MangaIdType } from '@/shared/kernel/manga';
import { Slider } from '@/entities/Slider';
import { MangaCardInlineSkeleton, StatisticsMangaCardInline } from '@/entities/MangaCard';
import { publicRqClient } from '@/shared/api/instance';

interface RelatedMangaSliderProps {
    className?: string;
    mangaId: MangaIdType;
}

export const RelatedMangaSlider: FC<RelatedMangaSliderProps> = (props) => {
    const { className, mangaId } = props;
    //const { data, isLoading } = useQuery(RelatedMangaApi.getQueryOptions(mangaId));
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/related/{id}', {
        params: { path: { id: String(mangaId) } },
    });
    const slides = useMemo(() => {
        if (!data?.data && isLoading) {
            return Array(6)
                .fill(0)
                .map((item, ind) => <MangaCardInlineSkeleton className={cls.card} key={ind} />);
        }
        if (!data?.data) return [];
        return data?.data.map((manga) => (
            <div key={manga.id} className={cls.card}>
                <StatisticsMangaCardInline manga={manga} />
            </div>
        ));
    }, [data?.data, isLoading]);

    if (!data?.data?.length && !isLoading) return null;

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
