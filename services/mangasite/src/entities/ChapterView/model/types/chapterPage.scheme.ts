import { z } from 'zod';

export const ChapterPageTypeEnum = z.enum(['image', 'rive']);

export const ChapterPageScheme = z.object({
    src: z.string(),
    type: ChapterPageTypeEnum,
});

export const ChapterPagesScheme = z.object({
    pageCount: z.number().int(),
    containerMaxWidth: z.number(),
    pages: ChapterPageScheme.array(),
});

export type ChapterPageType = z.infer<typeof ChapterPageScheme>;
export type ChapterPagesType = z.infer<typeof ChapterPagesScheme>;
export type ChapterPageTypeEnumType = z.infer<typeof ChapterPageTypeEnum>;
