import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';
export const validateMangaListItemContinueReadResponseArrayData = createDevValidator(() =>
    import('./../scheme/mangaListItemContinueRead').then(
        (r) => r.MangaListItemContinueReadResponseArrayData,
    ),
);
