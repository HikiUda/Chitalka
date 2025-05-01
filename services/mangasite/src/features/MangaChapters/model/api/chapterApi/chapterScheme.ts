import { z } from 'zod';

export const ChapterPageTypeEnum = z.enum(['image', 'rive']);

export const ChapterPageScheme = z.object({
    src: z.string(),
    type: ChapterPageTypeEnum,
});

export const ChapterPagesScheme = z.object({
    pageCount: z.number().int(),
    pages: ChapterPageScheme.array(),
});

export type ChapterPageType = z.infer<typeof ChapterPageScheme>;
export type ChapterPagesType = z.infer<typeof ChapterPagesScheme>;
export type ChapterPageTypeEnumType = z.infer<typeof ChapterPageTypeEnum>;

export const ChapterScheme = z.object({
    id: z.number(),
    tome: z.number(),
    chapter: z.number(),
    title: z.string().nullable(),
    mangaTitle: z.string(),
    likeCount: z.number(),
    prevChapterId: z.number().nullable(),
    nextChapterId: z.number().nullable(),
    isUserLiked: z.boolean(),
    isUserViewed: z.boolean(),
    pages: ChapterPagesScheme,
});

export type ChapterType = z.infer<typeof ChapterScheme>;
