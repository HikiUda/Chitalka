import { z } from 'zod';
import { SortBy } from './sortBy';

export const SortBySchema = z.object({
    sortBy: z.nativeEnum(SortBy).optional(),
});
export const SortBySchemaUrl = z.object({
    sortBy: z.nativeEnum(SortBy).optional(),
});
