import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateMangaBookmarkStatistic = createDevValidator(() =>
    import('./mangaBookmarkStatisticScheme').then((r) => r.MangaBookmarkStatisticScheme),
);
