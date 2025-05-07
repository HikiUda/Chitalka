import { createDevValidator } from '@/shared/lib/zod/createDevValidator';
export const validateMangaListItemContinueReadResponseArrayData = createDevValidator(() =>
    import('./../scheme/mangaListItemContinueRead').then(
        (r) => r.MangaListItemContinueReadResponseArrayData,
    ),
);
