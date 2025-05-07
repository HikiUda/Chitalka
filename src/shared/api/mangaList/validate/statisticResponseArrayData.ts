import { createDevValidator } from '@/shared/lib/zod/createDevValidator';
export const validateMangaListItemStatisticResponseArrayData = createDevValidator(() =>
    import('./../scheme/mangaListItemStatistic').then(
        (r) => r.MangaListItemStatisticResponseArrayDataScheme,
    ),
);
