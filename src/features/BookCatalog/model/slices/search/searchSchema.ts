import { z } from 'zod';

export const searchSchema = z.object({
    search: z.string().optional(),
});
export const searchSchemaUrl = z.object({
    search: z.string().optional(),
});
