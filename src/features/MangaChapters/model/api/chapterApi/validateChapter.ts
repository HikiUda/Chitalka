import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateChapter = createZodDevValidator(() =>
    import('./chapterScheme').then((r) => r.ChapterScheme),
);
