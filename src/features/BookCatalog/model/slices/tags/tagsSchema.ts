import { z } from 'zod';
import { NumberArrayField, NumberArrayFieldUrl } from '../../helpers/filtersSchemas';

export const tagsSchema = z.object({
    tags: NumberArrayField,
    notTags: NumberArrayField,
});
export const tagsSchemaUrl = z.object({
    tags: NumberArrayFieldUrl,
    notTags: NumberArrayFieldUrl,
});
