import { BookmarksEnum, MangaTypeEnum } from '@packages/model/src/entities/manga';
import { z } from 'zod';

export const MangaListItemBaseScheme = z.object({
    id: z.number().int(),
    urlId: z.string(),
    title: z.string(),
    type: MangaTypeEnum,
    cover: z.string(),
    views: z.number().int(),
    likes: z.number().int(),
    bookmarks: z.number().int(),
    bookmark: BookmarksEnum,
    tome: z.number().int(),
    chapter: z.number().int(),
    chapterCount: z.number().int(),
    readedCahpters: z.number().int(),
});
