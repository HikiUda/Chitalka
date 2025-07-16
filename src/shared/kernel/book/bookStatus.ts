import { z } from 'zod';

export const BookStatus = {
    Ongoing: 'Ongoing',
    Announced: 'Announced',
    Completed: 'Completed',
    Frozen: 'Frozen',
    Canceled: 'Canceled',
} as const;
export const BookStatusEnum = z.nativeEnum(BookStatus);
export type BookStatus = ValueOf<typeof BookStatus>;
