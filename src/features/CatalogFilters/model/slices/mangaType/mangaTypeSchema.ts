import { z } from 'zod';
import { StringArrayField } from '../../filtersSchemas';

export const mangaTypeSchema = z.object({
    type: StringArrayField,
});
