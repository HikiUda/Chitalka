import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';
export const validateMangaListItemStatisticResponseArrayData = createZodDevValidator(() =>
    import('../scheme/mangaListItemStatistic').then(
        (r) => r.MangaListItemStatisticResponseArrayDataScheme,
    ),
);
