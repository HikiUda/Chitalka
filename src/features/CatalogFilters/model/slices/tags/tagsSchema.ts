import { z } from 'zod';
import { NumberArrayField } from '../../filtersSchemas';

export const tagsSchema = z.object({
    tags: NumberArrayField,
    notTags: NumberArrayField,
});
