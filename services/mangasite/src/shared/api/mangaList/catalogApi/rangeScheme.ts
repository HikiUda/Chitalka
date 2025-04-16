import { z } from 'zod';

const RangeFromToScheme = z
    .number()
    .int()
    .transform((val) => String(val))
    .optional();
const RateFromToScheme = z
    .number()
    .min(0)
    .max(10)
    .transform((val) => String(val))
    .optional();
const releaseDateFromToScheme = z
    .date()
    .transform((val) => val.toISOString())
    .optional();
const ageFromToScheme = z
    .number()
    .min(0)
    .int()
    .transform((val) => String(val))
    .optional();

export const RangeScheme = z.object({
    ageRateFrom: ageFromToScheme,
    ageRateTo: ageFromToScheme,
    chapterCountFrom: RangeFromToScheme,
    chapterCountTo: RangeFromToScheme,
    rateCountFrom: RangeFromToScheme,
    rateCountTo: RangeFromToScheme,
    rateFrom: RateFromToScheme,
    rateTo: RateFromToScheme,
    releaseDateFrom: releaseDateFromToScheme,
    releaseDateTo: releaseDateFromToScheme,
});
