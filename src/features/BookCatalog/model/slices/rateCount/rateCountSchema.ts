import { z } from 'zod';
import { NumberField, NumberFieldUrl } from '../../helpers/filtersSchemas';

export const rateCountSchema = z.object({
    rateCountFrom: NumberField,
    rateCountTo: NumberField,
});
export const rateCountSchemaUrl = z.object({
    rateCountFrom: NumberFieldUrl,
    rateCountTo: NumberFieldUrl,
});
