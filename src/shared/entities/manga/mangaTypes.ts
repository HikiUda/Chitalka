import { z } from 'zod';
import { ValueOf } from '@/shared/types/common/common';

export const MangaType = {
    Manga: 'Manga',
    Manhwa: 'Manhwa',
    Manhua: 'Manhua',
    OEL: 'OEL',
    Rumanga: 'Rumanga',
    Comic: 'Comic',
} as const;

export const MangaTypeEnum = z.nativeEnum(MangaType);
export type MangaTypeType = ValueOf<typeof MangaType>;
