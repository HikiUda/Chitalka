import { z } from 'zod';
import { PaginationScheme } from '@/shared/types/pagination';
import { MangaListItemBaseScheme } from './mangaListItmeBase';

export const MangaListItemLastUpdatedScheme = MangaListItemBaseScheme.pick({
    id: true,
    urlId: true,
    title: true,
    cover: true,
    type: true,
    tome: true,
    chapter: true,
    chapterCreatedAt: true,
    chapterId: true,
});

export const MangaListItemLastUpdatedPagination = PaginationScheme(MangaListItemLastUpdatedScheme);

export type MangaListItemLastUpdatedType = z.infer<typeof MangaListItemLastUpdatedScheme>;
