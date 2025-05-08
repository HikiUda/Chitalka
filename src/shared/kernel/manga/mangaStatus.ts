import { z } from 'zod';

export const MangaStatus = {
    Ongoing: 'Ongoing',
    Announced: 'Announced',
    Completed: 'Completed',
    Frozen: 'Frozen',
    Canceled: 'Canceled',
} as const;
export const MangaStatusEnum = z.nativeEnum(MangaStatus);
export type MangaStatusType = ValueOf<typeof MangaStatus>;
