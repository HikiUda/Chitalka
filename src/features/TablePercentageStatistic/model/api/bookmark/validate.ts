import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateMangaBookmarkStatistic = createZodDevValidator(() =>
    import('./mangaBookmarkStatisticScheme').then((r) => r.MangaBookmarkStatisticScheme),
);
