import { z } from 'zod';
import { NumberField, NumberFieldUrl } from '../../filtersSchemas';

export const rateSchema = z.object({
    rateFrom: NumberField,
    rateTo: NumberField,
});
export const rateSchemaUrl = z.object({
    rateFrom: NumberFieldUrl,
    rateTo: NumberFieldUrl,
});
