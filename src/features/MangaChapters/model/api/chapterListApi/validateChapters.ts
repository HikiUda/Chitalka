import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

export const validateChapterList = createZodDevValidator(() =>
    import('./chaptersScheme').then((r) => r.ChapterListScheme),
);
