import { z } from 'zod';
import { ValueOf } from '@/shared/types/common/common';

export const Bookmarks = {
    Reading: 'Reading',
    Planned: 'Planned',
    Readed: 'Readed',
    Abandoned: 'Abandoned',
    Postponed: 'Postponed',
} as const;

export const BookmarksEnum = z.nativeEnum(Bookmarks);

export type BookmarksType = ValueOf<typeof Bookmarks>;
