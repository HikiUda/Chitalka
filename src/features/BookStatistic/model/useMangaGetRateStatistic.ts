import { RateValues } from './rateValues';
import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaGetRateStatistic(mangaId: BookId) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/{mangaId}/statistic/rate', {
        params: { path: { mangaId } },
    });

    const getRateCount = (rate?: RateValues) => {
        if (!rate) return data?.count || 0;
        if (!data) return 0;
        return data.statistic[rate].count;
    };

    const getRatePercentage = (rate: RateValues) => {
        if (!data) return 0;
        return data.statistic[rate].percentage;
    };

    return {
        rate: data?.rate || 0,
        getRateCount,
        getRatePercentage,
        isLoading,
    };
}
