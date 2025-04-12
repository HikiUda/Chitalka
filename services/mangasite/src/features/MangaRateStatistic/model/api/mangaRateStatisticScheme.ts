import { z } from 'zod';
import { createStatisticItem } from '@/shared/api/mangaStatistic';

export const RateStatisticScheme = z.tuple([
    createStatisticItem('1'),
    createStatisticItem('2'),
    createStatisticItem('3'),
    createStatisticItem('4'),
    createStatisticItem('5'),
    createStatisticItem('6'),
    createStatisticItem('7'),
    createStatisticItem('8'),
    createStatisticItem('9'),
    createStatisticItem('10'),
]);

export const RateFullStatisticScheme = z.object({
    rate: z.number(),
    rateCount: z.number().int(),
    rateStatistic: RateStatisticScheme,
});

export type RateStatisticType = z.infer<typeof RateStatisticScheme>;
export type RateFullStatisticType = z.infer<typeof RateFullStatisticScheme>;
