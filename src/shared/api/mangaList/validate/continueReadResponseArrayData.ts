import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';
export const validateMangaListItemContinueReadResponseArrayData = createZodDevValidator(() =>
    import('./../scheme/mangaListItemContinueRead').then(
        (r) => r.MangaListItemContinueReadResponseArrayData,
    ),
);
