import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';
export const validateQuickSearch = createDevValidator(() =>
    import('./../scheme/mangaListItem/mangaListItemStatistic').then(
        (r) => r.MangaListItemStatisticResponseArrayDataScheme,
    ),
);
export const validateGetLastSearch = createDevValidator(() =>
    import('./../scheme/lastSearch/lastSearch').then((r) => r.LastSearchResponseArrayDataScheme),
);
