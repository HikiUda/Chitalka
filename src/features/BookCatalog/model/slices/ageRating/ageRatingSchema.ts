import { z } from 'zod';
import { NumberArrayField, NumberArrayFieldUrl } from '../../filtersSchemas';
import { AgeRatingEnum } from '@/shared/kernel/book/ageRating';

export const ageRatingSchema = z.object({
    ageRating: NumberArrayField,
});
export const ageRatingSchemaUrl = z.object({
    ageRating: NumberArrayFieldUrl.pipe(AgeRatingEnum.array().catch([])),
});
