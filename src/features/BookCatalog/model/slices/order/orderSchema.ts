import { z } from 'zod';

export const orderSchema = z.object({
    order: z.enum(['asc', 'desc']).optional(),
});
export const orderSchemaUrl = z.object({
    order: z.enum(['asc', 'desc']).optional(),
});
