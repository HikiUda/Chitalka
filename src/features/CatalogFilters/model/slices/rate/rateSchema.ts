import { z } from 'zod';
import { NumberField, NumberFieldUrl } from '../../filtersSchemas';

export const RateSchema = z.object({
    rateFrom: NumberField,
    rateTo: NumberField,
});
export const RateSchemaUrl = z.object({
    rateFrom: NumberFieldUrl,
    rateTo: NumberFieldUrl,
});
