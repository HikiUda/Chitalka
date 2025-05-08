import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/ui/Stack';
import { useQuery } from '@tanstack/react-query';
import { TextDisclosure } from '@/shared/ui/TextDisclosure';
import { MangaIdType } from '@/shared/kernel/manga';
import { isMobile } from 'react-device-detect';
import cls from './AboutManga.module.scss';
import { GenresAndTagsList } from '@/entities/GenresAndTagsList';
import { MangaApi } from '@/shared/api/individualManga';
import { RelatedMangaSlider } from '@/features/RelatedMangaSlider';
import { MangaBookmarksStatistic, MangaRateStatistic } from '@/features/TablePercentageStatistic';

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
            <RelatedMangaSlider className={cls.relatedMangaSlider} mangaId={manga.id} />
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
