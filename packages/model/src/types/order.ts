import { z } from 'zod';

export const OrderEnum = z.enum(['asc', 'desc']);
export type OrderType = z.infer<typeof OrderEnum>;
