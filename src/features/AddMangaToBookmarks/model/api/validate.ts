import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateMangaUserBookmark = createDevValidator(() =>
    import('./mangaUserBookmarkScheme').then((r) => r.MangaUserBookmarkScheme),
);
