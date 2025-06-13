import { z } from 'zod';
import { StringArrayField } from '../../filtersSchemas';

export const statusSchema = z.object({
    status: StringArrayField,
});
