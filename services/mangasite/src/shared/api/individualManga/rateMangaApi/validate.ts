import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateRateManga = createDevValidator(() =>
    import('./rateMangaScheme').then((r) => r.RateMangaScheme),
);
