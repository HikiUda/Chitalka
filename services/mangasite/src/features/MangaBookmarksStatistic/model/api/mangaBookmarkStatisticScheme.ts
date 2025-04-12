import { Bookmarks } from '@packages/model/src/entities/manga';
import { z } from 'zod';
import { createStatisticItem } from '@/shared/api/mangaStatistic';

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
