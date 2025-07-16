import { z } from 'zod';

export const Bookmarks = {
    Reading: 'Reading',
    Planned: 'Planned',
    Readed: 'Readed',
    Abandoned: 'Abandoned',
    Postponed: 'Postponed',
} as const;

export const BookmarksEnum = z.nativeEnum(Bookmarks);

export type Bookmarks = ValueOf<typeof Bookmarks>;
