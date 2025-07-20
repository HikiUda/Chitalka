import { z } from 'zod';
import { StringArrayField, StringArrayFieldUrl } from '../../filtersSchemas';
import { BookmarksEnum } from '@/shared/kernel/book/bookmarks';

export const bookmarksSchema = z.object({
    bookmarks: StringArrayField,
});
export const bookmarksSchemaUrl = z.object({
    bookmarks: StringArrayFieldUrl(BookmarksEnum),
});
