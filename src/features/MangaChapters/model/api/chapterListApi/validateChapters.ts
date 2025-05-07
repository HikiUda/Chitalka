import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateChapterList = createDevValidator(() =>
    import('./chaptersScheme').then((r) => r.ChapterListScheme),
);
