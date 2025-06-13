import { z } from 'zod';
import { NumberField } from '../../filtersSchemas';

export const RateCountSchema = z.object({
    rateCountFrom: NumberField,
    rateCountTo: NumberField,
});
