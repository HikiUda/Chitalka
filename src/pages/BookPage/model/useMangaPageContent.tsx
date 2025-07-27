import { useMemo } from 'react';
import { MangaComments } from '../ui/MangaPage/MangaComments';
import { TabValues, type TabsType } from './useBookPageContent';
import { BookId } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const AboutManga = lazyNamed(() => import('../ui/MangaPage/AboutManga'), 'AboutManga');
const MangaChapters = lazyNamed(() => import('@/features/BookChapters'), 'MangaChapters');

export function useMangaPageContent(mangaId: BookId): {
    tabs: TabsType;
    defaultTabValue: TabValues;
} {
    return useMemo(() => {
        const tabs: TabsType = [
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
        return {
            tabs,
            defaultTabValue: 'info',
        };
    }, [mangaId]);
}
