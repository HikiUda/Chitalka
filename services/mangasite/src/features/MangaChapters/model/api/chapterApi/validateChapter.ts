import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateChapter = createDevValidator(() =>
    import('./chapterScheme').then((r) => r.ChapterScheme),
);
