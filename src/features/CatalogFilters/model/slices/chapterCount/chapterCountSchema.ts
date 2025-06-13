import { z } from 'zod';
import { NumberField, NumberFieldUrl } from '../../filtersSchemas';

export const chapterCountSchema = z.object({
    chapterCountFrom: NumberField,
    chapterCountTo: NumberField,
});
export const chapterCountSchemaUrl = z.object({
    chapterCountFrom: NumberFieldUrl,
    chapterCountTo: NumberFieldUrl,
});
