import { z } from 'zod';
import { ResponseArrayDataScheme } from '@/shared/types/pagination';
import { MangaListItemBaseScheme } from './mangaListItmeBase';

export const MangaListItemStatisticScheme = MangaListItemBaseScheme.pick({
    id: true,
    urlId: true,
    title: true,
    cover: true,
    type: true,
    views: true,
    likes: true,
    bookmarks: true,
});

export const MangaListItemStatisticResponseArrayDataScheme = ResponseArrayDataScheme(
    MangaListItemStatisticScheme,
);

export type MangaListItemStatisticType = z.infer<typeof MangaListItemStatisticScheme>;
