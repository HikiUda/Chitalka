import { z } from 'zod';
import { NumberField, NumberFieldUrl } from '../../filtersSchemas';

export const RateCountSchema = z.object({
    rateCountFrom: NumberField,
    rateCountTo: NumberField,
});
export const RateCountSchemaUrl = z.object({
    rateCountFrom: NumberFieldUrl,
    rateCountTo: NumberFieldUrl,
});
