import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';
import { validateMangaListItemStatisticResponseArrayData } from '@/shared/api/mangaList';
export const validateQuickSearch = validateMangaListItemStatisticResponseArrayData;
export const validateGetLastSearch = createZodDevValidator(() =>
    import('./scheme/lastSearch').then((r) => r.LastSearchResponseArrayDataScheme),
);
