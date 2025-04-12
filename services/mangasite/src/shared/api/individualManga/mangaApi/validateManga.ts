import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateManga = createDevValidator(() =>
    import('./mangaScheme').then((r) => r.MangaScheme),
);
