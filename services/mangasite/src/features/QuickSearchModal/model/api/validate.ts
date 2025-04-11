import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';
import { validateMangaListItemStatisticResponseArrayData } from '@/shared/api/mangaList';
export const validateQuickSearch = validateMangaListItemStatisticResponseArrayData;
export const validateGetLastSearch = createDevValidator(() =>
    import('./scheme/lastSearch').then((r) => r.LastSearchResponseArrayDataScheme),
);
