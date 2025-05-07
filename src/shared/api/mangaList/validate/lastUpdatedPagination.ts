import { createDevValidator } from '@/shared/lib/zod/createDevValidator';
export const validateMangaListItemLastUpdatedPagination = createDevValidator(() =>
    import('./../scheme/mangaListItemLastUpdated').then(
        (r) => r.MangaListItemLastUpdatedPagination,
    ),
);
