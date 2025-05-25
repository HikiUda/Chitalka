import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { useQuery } from '@tanstack/react-query';
import { TextDisclosure } from '@/shared/deprecate-ui/TextDisclosure';
import { MangaIdType } from '@/shared/kernel/manga';
import { isMobile } from 'react-device-detect';
import cls from './AboutManga.module.scss';
import { GenresAndTagsList } from '@/entities/GenresAndTagsList';
import { MangaApi } from '@/shared/api/deprecated/individualManga';
import { RelatedMangaSlider } from '@/features/RelatedMangaSlider';
import { Heading } from '@/shared/ui/kit/heading';
import { MangaBookmarksStatistic, MangaRateStatistic } from '@/features/MangaStatistic';

interface AboutMangaProps {
    className?: string;
    mangaId: MangaIdType;
}

const AboutManga: FC<AboutMangaProps> = (props) => {
    const { className, mangaId } = props;
    const { data: manga } = useQuery(MangaApi.getMangaQueryOptions(mangaId));
    if (!manga) return null;
    return (
        <div className={classNames(cls.AboutManga, {}, [className])}>
            <TextDisclosure
                className={cls.textDisclosure}
                text={manga.description || 'Описание отсутствует'}
            />
            <GenresAndTagsList
                genres={manga.genres}
                tags={manga.tags}
                className={cls.genresAndTagsList}
            />
            <RelatedMangaSlider
                className="mb-4 w-[68vw]"
                mangaId={manga.id}
                heading={
                    <Heading className="ml-3 mb-2" variant="h3" color="primary">
                        Связаное
                    </Heading>
                }
            />
            <div
                className={classNames(cls.statistic, {}, [
                    getFlex(isMobile ? { direction: 'column' } : { align: 'start' }),
                ])}
            >
                <MangaRateStatistic className={cls.statisticBlock} mangaId={manga.id} />
                <MangaBookmarksStatistic className={cls.statisticBlock} mangaId={manga.id} />
            </div>
        </div>
    );
};
export default AboutManga;
