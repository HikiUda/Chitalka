import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateManga = createDevValidator(() =>
    import('./mangaScheme').then((r) => r.MangaScheme),
);
