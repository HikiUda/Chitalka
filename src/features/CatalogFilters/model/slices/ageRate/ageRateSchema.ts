import { z } from 'zod';
import { NumberField } from '../../filtersSchemas';

export const ageRateSchema = z.object({
    ageRateFrom: NumberField,
    ageRateTo: NumberField,
});
