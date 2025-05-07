import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateMangaRateStatistic = createDevValidator(() =>
    import('./mangaRateStatisticScheme').then((r) => r.RateFullStatisticScheme),
);
