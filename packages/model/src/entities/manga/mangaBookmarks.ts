import { ValueOf } from '@model/types/common/common';
import { z } from 'zod';

export const Bookmarks = {
    Reading: 'Reading',
    Planned: 'Planned',
    Readed: 'Readed',
    Abandoned: 'Abandoned',
    Postponed: 'Postponed',
} as const;

export const BookmarksEnum = z.nativeEnum(Bookmarks);

export type BookmarksType = ValueOf<typeof Bookmarks>;
