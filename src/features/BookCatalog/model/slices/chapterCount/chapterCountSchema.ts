import { z } from 'zod';
import { NumberField, NumberFieldUrl } from '../../helpers/filtersSchemas';

export const chapterCountSchema = z.object({
    chapterCountFrom: NumberField,
    chapterCountTo: NumberField,
});
export const chapterCountSchemaUrl = z.object({
    chapterCountFrom: NumberFieldUrl,
    chapterCountTo: NumberFieldUrl,
});
