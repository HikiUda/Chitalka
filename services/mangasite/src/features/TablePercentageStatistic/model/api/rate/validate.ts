import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateMangaRateStatistic = createDevValidator(() =>
    import('./mangaRateStatisticScheme').then((r) => r.RateFullStatisticScheme),
);
