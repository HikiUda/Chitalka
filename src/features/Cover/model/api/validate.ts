import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateMangaCoversResponseArrayData = createDevValidator(() =>
    import('./mangaCoversScheme').then((r) => r.MangaCoverResponseArrayDataScheme),
);
