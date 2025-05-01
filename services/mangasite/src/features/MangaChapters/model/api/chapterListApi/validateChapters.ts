import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateChapterList = createDevValidator(() =>
    import('./chaptersScheme').then((r) => r.ChapterListScheme),
);
