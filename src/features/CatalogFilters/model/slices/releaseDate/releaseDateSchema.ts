import { z } from 'zod';
import { DateField, DateFieldUrl } from '../../filtersSchemas';

export const releaseDateSchema = z.object({
    releaseDateFrom: DateField,
    releaseDateTo: DateField,
});
export const releaseDateSchemaUrl = z.object({
    releaseDateFrom: DateFieldUrl,
    releaseDateTo: DateFieldUrl,
});
