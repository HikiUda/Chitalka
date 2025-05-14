import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';
export const validateMangaListItemLastUpdatedPagination = createZodDevValidator(() =>
    import('../scheme/mangaListItemLastUpdated').then((r) => r.MangaListItemLastUpdatedPagination),
);
