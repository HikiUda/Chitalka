import { delay, http, HttpResponse } from 'msw';
import { RateFullStatisticType, RateStatisticType } from './mangaRateStatisticScheme';

export const mockRateStatistic: RateStatisticType = [
    {
        title: '1',
        count: 10,
        percentage: 10,
    },
    {
        title: '2',
        count: 5,
        percentage: 5,
    },
    {
        title: '3',
        count: 15,
        percentage: 15,
    },
    {
        title: '4',
        count: 10,
        percentage: 10,
    },
    {
        title: '5',
        count: 5,
        percentage: 5,
    },
    {
        title: '6',
        count: 5,
        percentage: 5,
    },
    {
        title: '7',
        count: 20,
        percentage: 20,
    },
    {
        title: '8',
        count: 15,
        percentage: 15,
    },
    {
        title: '9',
        count: 10,
        percentage: 10,
    },
    {
        title: '10',
        count: 5,
        percentage: 5,
    },
];

export const mockRateFullStatistic: RateFullStatisticType = {
    rate: 9,
    rateCount: 100,
    rateStatistic: mockRateStatistic,
};

export const mockMangaRateStatisticApi = (timeout?: number) =>
    http.get('*/manga/statistic/:id/rate', async () => {
        if (timeout) await delay(timeout);
        return HttpResponse.json(mockRateFullStatistic);
    });
