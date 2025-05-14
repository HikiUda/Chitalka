import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateRateManga = createZodDevValidator(() =>
    import('./rateMangaScheme').then((r) => r.RateMangaScheme),
);
