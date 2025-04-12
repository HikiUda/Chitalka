import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { useQuery } from '@tanstack/react-query';
import { TextDisclosure } from '@packages/ui/src/shared/TextDisclosure';
import { MangaIdType } from '@packages/model/src/entities/manga';
import cls from './AboutManga.module.scss';
import { GenresAndTagsList } from '@/features/GenresAndTagsList';
import { MangaRateStatistic } from '@/features/MangaRateStatistic';
import { MangaBookmarksStatistic } from '@/features/MangaBookmarksStatistic';
import { MangaApi } from '@/shared/api/individualManga';
import { RelatedMangaSlider } from '@/features/RelatedMangaSlider';

interface AboutMangaProps {
    className?: string;
    mangaId: MangaIdType;
}

const AboutManga: FC<AboutMangaProps> = (props) => {
    const { className, mangaId } = props;
    const { data: manga, isLoading, isError } = useQuery(MangaApi.getMangaQueryOptions(mangaId));
    //TODO loading and error
    if (!manga && isLoading) return <div>Loadign...</div>;
    if (!manga || isError) return <div>Error</div>;
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
            <HStack align="start" className={cls.statistic}>
                <MangaRateStatistic className={cls.statisticBlock} mangaId={manga.id} />
                <MangaBookmarksStatistic className={cls.statisticBlock} mangaId={manga.id} />
            </HStack>
        </div>
    );
};
export default AboutManga;
