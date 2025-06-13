import { z } from 'zod';

export const OrderSchema = z.object({
    order: z.enum(['asc', 'desc']).optional(),
});
export const OrderSchemaUrl = z.object({
    order: z.enum(['asc', 'desc']).optional(),
});
