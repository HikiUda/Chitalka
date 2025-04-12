import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateMangaBookmarkStatistic = createDevValidator(() =>
    import('./mangaBookmarkStatisticScheme').then((r) => r.MangaBookmarkStatisticScheme),
);
