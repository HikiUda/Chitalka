import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateMangaListItemCatalogPagination = createDevValidator(() =>
    import('../scheme/mangaListitemCatalog').then((r) => r.MangaListItemCatalogPagination),
);
