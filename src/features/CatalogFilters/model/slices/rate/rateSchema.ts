import { z } from 'zod';
import { NumberField } from '../../filtersSchemas';

export const RateSchema = z.object({
    rateFrom: NumberField,
    rateTo: NumberField,
});
