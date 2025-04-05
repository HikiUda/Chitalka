import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { TextDisclosure } from '@packages/ui/src/shared/TextDisclosure';
import { HStack } from '@packages/ui/src/shared/Stack';
import { MangaType } from '@packages/model/src/api/manga/types/manga';
import cls from './AboutManga.module.scss';
import { JanresAndTagsList } from '@/features/JanresAndTagsList';
import { SimilarMangaSlider } from '@/features/SimilarMangaSlider';
import { MangaRateStatistic } from '@/features/MangaRateStatistic';
import { MangaBookmarksStatistic } from '@/features/MangaBookmarksStatistic';

interface AboutMangaProps {
    className?: string;
    manga: MangaType;
}

const AboutManga: FC<AboutMangaProps> = (props) => {
    const { className, manga } = props;
    return (
        <div className={classNames(cls.AboutManga, {}, [className])}>
            <TextDisclosure
                className={cls.textDisclosure}
                text={manga.description || 'Описание отсутствует'}
            />

            <JanresAndTagsList
                janres={manga.janres}
                tags={manga.tags}
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
