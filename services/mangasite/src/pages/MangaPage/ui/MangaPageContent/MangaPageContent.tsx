import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { TabItem, Tabs } from '@packages/ui/src/shared/Tabs';
import cls from './MangaPageContent.module.scss';
import { AboutManga } from '@/widgets/AboutManga';

interface MangaPageContentProps {
    className?: string;
}

const tabs: TabItem<string>[] = [
    {
        id: 1,
        title: 'Главная',
        content: <AboutManga />,
    },
    {
        id: 2,
        title: 'Главы',
        content: <div>Главы</div>,
    },
    {
        id: 3,
        title: 'Комментарии',
        content: <div>Комментарии</div>,
    },
];

export const MangaPageContent: FC<MangaPageContentProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MangaPageContent, {}, [className])}>
            <Tabs tabs={tabs} />
        </div>
    );
};
