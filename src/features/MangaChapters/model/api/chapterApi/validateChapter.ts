import { createDevValidator } from '@/shared/lib/zod/createDevValidator';

export const validateChapter = createDevValidator(() =>
    import('./chapterScheme').then((r) => r.ChapterScheme),
);
