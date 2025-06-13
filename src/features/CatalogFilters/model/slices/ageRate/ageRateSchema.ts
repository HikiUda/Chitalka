import { z } from 'zod';
import { NumberField, NumberFieldUrl } from '../../filtersSchemas';

export const ageRateSchema = z.object({
    ageRateFrom: NumberField,
    ageRateTo: NumberField,
});
export const ageRateSchemaUrl = z.object({
    ageRateFrom: NumberFieldUrl,
    ageRateTo: NumberFieldUrl,
});
