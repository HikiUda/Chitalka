import { PaginationScheme } from '@packages/model/src/types/pagination';
import { z } from 'zod';

export const ChapterListItemScheme = z.object({
    id: z.number(),
    tome: z.number(),
    chapter: z.number(),
    title: z.string().nullable(),
    createdAt: z.coerce.date(),
    isUserViewed: z.boolean(),
});

export const ChapterListScheme = PaginationScheme(ChapterListItemScheme);

export type ChapterListItemType = z.infer<typeof ChapterListItemScheme>;
export type ChapterListType = z.infer<typeof ChapterListScheme>;
