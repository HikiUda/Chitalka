import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateMangaRateStatistic = createZodDevValidator(() =>
    import('./mangaRateStatisticScheme').then((r) => r.RateFullStatisticScheme),
);
