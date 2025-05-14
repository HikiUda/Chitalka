import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateMangaListItemCatalogPagination = createZodDevValidator(() =>
    import('../scheme/mangaListitemCatalog').then((r) => r.MangaListItemCatalogPagination),
);
