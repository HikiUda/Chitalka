import { z } from 'zod';

export const searchSchema = z.object({
    search: z.string().optional().catch(undefined),
});
export const searchSchemaUrl = z.object({
    search: z.string().optional().catch(undefined),
});
