import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateMangaCoversResponseArrayData = createZodDevValidator(() =>
    import('./mangaCoversScheme').then((r) => r.MangaCoverResponseArrayDataScheme),
);
