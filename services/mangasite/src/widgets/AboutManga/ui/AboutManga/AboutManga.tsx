import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { useGetManga } from '@packages/model/src/api/manga/useGetManga';
import { MangaIdType } from '@packages/model/src/entities/manga/types/types';
import { Description } from '../Description/Description';
import cls from './AboutManga.module.scss';
import { JanresAndTagsList } from '@/features/JanresAndTagsList';
import { SimilarMangaSlider } from '@/features/SimilarMangaSlider';
import { MangaRateStatistic } from '@/features/MangaRateStatistic';
import { MangaBookmarksStatistic } from '@/features/MangaBookmarksStatistic';

interface AboutMangaProps {
    className?: string;
    mangaId: MangaIdType;
}

const AboutManga: FC<AboutMangaProps> = (props) => {
    const { className, mangaId } = props;
    const { data: manga, isLoading } = useGetManga(mangaId);
    return (
        <div className={classNames(cls.AboutManga, {}, [className])}>
            <Description
                description={manga?.description}
                isLoading={isLoading}
                className={cls.textDisclosure}
            />
            <JanresAndTagsList
                janres={manga?.janres}
                tags={manga?.tags}
                isLoading={isLoading}
                className={cls.janresAndTagsList}
            />
            <SimilarMangaSlider className={cls.similarMangaSlider} />
            <HStack align="start" className={cls.statistic}>
                <MangaRateStatistic className={cls.statisticBlock} />
                <MangaBookmarksStatistic className={cls.statisticBlock} />
            </HStack>
        </div>
    );
};
export default AboutManga;
