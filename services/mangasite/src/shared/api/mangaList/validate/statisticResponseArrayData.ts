import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';
export const validateMangaListItemStatisticResponseArrayData = createDevValidator(() =>
    import('./../scheme/mangaListItemStatistic').then(
        (r) => r.MangaListItemStatisticResponseArrayDataScheme,
    ),
);
