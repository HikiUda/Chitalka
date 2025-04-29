import { createDevValidator } from '@packages/model/src/lib/zod/createDevValidator';

export const validateChapters = createDevValidator(() =>
    import('./chaptersScheme').then((r) => r.ChapterListScheme),
);
