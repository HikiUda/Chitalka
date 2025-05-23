import { BookmarksEnum, MangaTypeEnum } from '@/shared/kernel/manga';
import { PaginationScheme, ResponseArrayDataScheme } from '@/shared/kernel/pagination';
import { z } from 'zod';

export const MangaListItemBaseScheme = z.object({
    id: z.number().int(),
    urlId: z.string(),
    title: z.string(),
    type: MangaTypeEnum,
    cover: z.string(),
    rate: z.number(),
    views: z.number().int(),
    likes: z.number().int(),
    bookmarks: z.number().int(),
    bookmark: BookmarksEnum.nullable(),
    tome: z.number().int(),
    chapter: z.number(),
    chapterCount: z.number().int(),
    chapterCreatedAt: z.coerce.date(),
    readedChapters: z.number().int(),
    chapterId: z.number().int(),
});

export const MangaListItemBaseResponseArrayData = ResponseArrayDataScheme(MangaListItemBaseScheme);
export type MangaListItemBaseResponseArrayDataType = z.infer<
    typeof MangaListItemBaseResponseArrayData
>;
export const MangaListItemBasePagination = PaginationScheme(MangaListItemBaseScheme);
export type MangaListItemBasePaginationType = z.infer<typeof MangaListItemBasePagination>;

export type MangaListItemBaseType = z.infer<typeof MangaListItemBaseScheme>;
