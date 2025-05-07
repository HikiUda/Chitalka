import { BookmarksEnum } from '@/shared/entities/manga';
import { z } from 'zod';

export const MangaUserBookmarkScheme = z.object({
    mangaId: z.number().int(),
    userId: z.number().int(),
    bookmark: BookmarksEnum.nullable(),
});

export type MangaUserBookmarkType = z.infer<typeof MangaUserBookmarkScheme>;
