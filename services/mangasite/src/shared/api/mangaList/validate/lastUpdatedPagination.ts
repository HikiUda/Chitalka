import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';
export const validateMangaListItemLastUpdatedPagination = createDevValidator(() =>
    import('./../scheme/mangaListItemLastUpdated').then(
        (r) => r.MangaListItemLastUpdatedPagination,
    ),
);
