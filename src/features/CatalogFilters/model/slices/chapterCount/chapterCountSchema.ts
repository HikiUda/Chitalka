import { z } from 'zod';
import { NumberField } from '../../filtersSchemas';

export const chapterCountSchema = z.object({
    chapterCountFrom: NumberField,
    chapterCountTo: NumberField,
});
