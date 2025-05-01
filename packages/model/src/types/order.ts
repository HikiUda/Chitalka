import { z } from 'zod';

export const Order = {
    asc: 'asc',
    desc: 'desc',
} as const;

export const OrderEnum = z.nativeEnum(Order);
export type OrderType = z.infer<typeof OrderEnum>;
