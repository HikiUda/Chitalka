import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateManga = createZodDevValidator(() =>
    import('./mangaScheme').then((r) => r.MangaScheme),
);
