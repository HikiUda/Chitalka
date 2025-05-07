import { z } from 'zod';
import { ChapterPagesScheme } from '@/entities/ChapterView';

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
