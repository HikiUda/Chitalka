import { publicRqClient } from '@/shared/api/instance';
import { Bookmarks } from '@/shared/kernel/book';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeGetBookmarkStatistic(ranobeId: BookId) {
    const { data, isLoading } = publicRqClient.useQuery(
        'get',
        '/ranobe/{ranobeId}/statistic/bookmark',
        { params: { path: { ranobeId } } },
    );

    const getBookmarkCount = (bookmark?: Bookmarks) => {
        if (!bookmark) return data?.count || 0;
        if (!data) return 0;
        return data.statistic[bookmark].count;
    };

    const getBookmarkPercentage = (bookmark: Bookmarks) => {
        if (!data) return 0;
        return data.statistic[bookmark].percentage;
    };

    return {
        getBookmarkCount,
        getBookmarkPercentage,
        isLoading,
    };
}
