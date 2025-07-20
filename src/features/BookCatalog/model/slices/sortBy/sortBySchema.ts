import { z } from 'zod';
import { SortBy } from './sortBy';

export const sortBySchema = z.object({
    sortBy: z.nativeEnum(SortBy).optional().catch(undefined),
});
export const sortBySchemaUrl = z.object({
    sortBy: z.nativeEnum(SortBy).optional().catch(undefined),
});
