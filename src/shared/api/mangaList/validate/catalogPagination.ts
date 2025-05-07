import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateMangaListItemCatalogPagination = createDevValidator(() =>
    import('../scheme/mangaListitemCatalog').then((r) => r.MangaListItemCatalogPagination),
);
