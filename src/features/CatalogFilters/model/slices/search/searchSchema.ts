import { z } from 'zod';

export const SearchSchema = z.object({
    search: z.string().optional(),
});
export const SearchSchemaUrl = z.object({
    search: z.string().optional(),
});
