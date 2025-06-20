import { useMemo } from 'react';
import { MangaComments } from '../ui/MangaPage/MangaComments';
import { type TabsType, useBookPageContent } from './useBookPageContent';
import { MangaIdType } from '@/shared/kernel/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { MangaChapters } from '@/features/BookChapters';

const AboutManga = lazyNamed(() => import('../ui/MangaPage/AboutManga'), 'AboutManga');

const TabValuesConst = ['info', 'chapters', 'comments'] as const;

type TabValues = (typeof TabValuesConst)[number];

export function useMangaPageContent(mangaId: MangaIdType): {
    tabs: TabsType<TabValues>;
    tabValue: TabValues;
    onTabChange: (section: string) => void;
} {
    const { tabValue, onTabChange } = useBookPageContent(TabValuesConst, 'info');

    const tabs: TabsType<TabValues> = useMemo(() => {
        return [
            {
                value: 'info',
                title: 'О тайтле',
                content: <AboutManga mangaId={mangaId} />,
            },
            {
                value: 'chapters',
                title: 'Главы',
                content: <MangaChapters mangaId={mangaId} />,
            },
            {
                value: 'comments',
                title: 'Комментарии',
                content: <MangaComments />,
            },
        ];
    }, [mangaId]);

    return {
        tabs,
        tabValue,
        onTabChange,
    };
}
