import { publicRqClient } from '@/shared/api/instance';
import { Bookmarks } from '@/shared/kernel/book';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaGetBookmarkStatistic(mangaId: BookId) {
    const { data, isLoading } = publicRqClient.useQuery(
        'get',
        '/manga/{mangaId}/statistic/bookmark',
        { params: { path: { mangaId } } },
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
