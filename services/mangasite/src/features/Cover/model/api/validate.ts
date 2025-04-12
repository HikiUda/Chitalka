import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateMangaCoversResponseArrayData = createDevValidator(() =>
    import('./mangaCoversScheme').then((r) => r.MangaCoverResponseArrayDataScheme),
);
