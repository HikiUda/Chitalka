import { queryOptions, useQuery } from '@tanstack/react-query';
import { publicFetchClient } from '@/shared/api/instance';

export function useRanobeQuickSearch(search?: string) {
    const QuickSearchQuery = queryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['get', '/quick-search/ranobe'],
        queryFn: async () =>
            await publicFetchClient
                .GET('/quick-search/ranobe', { params: { query: { search, limit: 10 } } })
                .then((res) => res.data),
    });
    const { data, isFetching, refetch } = useQuery(QuickSearchQuery);

    return { data: data?.data, isFetching, refetch: () => refetch() };
}
