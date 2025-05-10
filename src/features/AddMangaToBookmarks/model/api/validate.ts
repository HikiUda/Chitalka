import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateMangaUserBookmark = createZodDevValidator(() =>
    import('./mangaUserBookmarkScheme').then((r) => r.MangaUserBookmarkScheme),
);
