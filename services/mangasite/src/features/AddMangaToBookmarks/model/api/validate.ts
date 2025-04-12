import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateMangaUserBookmark = createDevValidator(() =>
    import('./mangaUserBookmarkScheme').then((r) => r.MangaUserBookmarkScheme),
);
