import { z } from 'zod';
import { DateField } from '../../filtersSchemas';

export const releaseDateSchema = z.object({
    releaseDateFrom: DateField,
    releaseDateTo: DateField,
});
