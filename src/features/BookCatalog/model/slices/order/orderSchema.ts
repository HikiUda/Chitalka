import { z } from 'zod';

export const orderSchema = z.object({
    order: z.enum(['asc', 'desc']).optional().catch(undefined),
});
export const orderSchemaUrl = z.object({
    order: z.enum(['asc', 'desc']).optional().catch(undefined),
});
