import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateRateManga = createDevValidator(() =>
    import('./rateMangaScheme').then((r) => r.RateMangaScheme),
);
