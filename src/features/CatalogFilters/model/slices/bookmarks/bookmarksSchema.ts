import { z } from 'zod';
import { StringArrayField } from '../../filtersSchemas';

export const bookmarksSchema = z.object({
    bookmarks: StringArrayField,
});
