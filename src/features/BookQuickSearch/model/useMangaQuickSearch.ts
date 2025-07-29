import { queryOptions, useQuery } from '@tanstack/react-query';
import { publicFetchClient } from '@/shared/api/instance';

export function useMangaQuickSearch(search?: string) {
    const QuickSearchQuery = queryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['get', '/quick-search/manga'],
        queryFn: async () =>
            await publicFetchClient
                .GET('/quick-search/manga', { params: { query: { search, limit: 10 } } })
                .then((res) => res.data),
    });
    const { data, isFetching, refetch } = useQuery(QuickSearchQuery);

    return { data: data?.data, isFetching, refetch: () => refetch() };
}
