import { FC, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { TabItem, Tabs } from '@packages/ui/src/shared/Tabs';
import { MangaType } from '@packages/model/src/api/manga/types/manga';
import cls from './MangaPageContent.module.scss';
import { AboutManga } from '@/widgets/AboutManga';
import { MangaChapters } from '@/widgets/MangaChapters';
import { MangaComments } from '@/widgets/MangaComments';

interface MangaPageContentProps {
    className?: string;
    manga: MangaType;
}

export const MangaPageContent: FC<MangaPageContentProps> = (props) => {
    const { className, manga } = props;

    const tabs: TabItem<string>[] = useMemo(() => {
        return [
            {
                id: 1,
                title: 'О тайтле',
                content: <AboutManga manga={manga} />,
            },
            {
                id: 2,
                title: 'Главы',
                content: <MangaChapters />,
            },
            {
                id: 3,
                title: 'Комментарии',
                content: <MangaComments />,
            },
        ];
    }, [manga]);

    return (
        <div className={classNames(cls.MangaPageContent, {}, [className])}>
            <Tabs tabs={tabs} />
        </div>
    );
};
