import { useMemo } from 'react';
import { MangaComments } from '../ui/MangaPage/MangaComments';
import { type TabsType, useBookPageContent } from './useBookPageContent';
import { BookId } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const AboutManga = lazyNamed(() => import('../ui/MangaPage/AboutManga'), 'AboutManga');
const MangaChapters = lazyNamed(() => import('@/features/BookChapters'), 'MangaChapters');

const TabValues = ['info', 'chapters', 'comments'] as const;
type TabValues = (typeof TabValues)[number];

export function useMangaPageContent(mangaId: BookId): {
    tabs: TabsType<TabValues>;
    tabValue: TabValues;
    onTabChange: (section: string) => void;
} {
    const { tabValue, onTabChange } = useBookPageContent(TabValues, 'info');

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
