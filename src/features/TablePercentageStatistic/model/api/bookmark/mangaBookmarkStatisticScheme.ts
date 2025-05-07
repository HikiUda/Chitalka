import { Bookmarks } from '@/shared/entities/manga';
import { z } from 'zod';
import { createStatisticItem } from '../scheme/percentItemScheme';

export const MangaBookmarkStatisticScheme = z.object({
    all: z.number().int(),
    bookmarks: z.tuple([
        createStatisticItem(Bookmarks.Reading),
        createStatisticItem(Bookmarks.Planned),
        createStatisticItem(Bookmarks.Readed),
        createStatisticItem(Bookmarks.Abandoned),
        createStatisticItem(Bookmarks.Postponed),
    ]),
});

export type MangaBookmarkStatisticType = z.infer<typeof MangaBookmarkStatisticScheme>;
