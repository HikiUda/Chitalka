import { RateValues } from './rateValues';
import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeGetRateStatistic(ranobeId: BookId) {
    const { data, isLoading } = publicRqClient.useQuery(
        'get',
        '/ranobe/{ranobeId}/statistic/rate',
        {
            params: { path: { ranobeId } },
        },
    );

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
