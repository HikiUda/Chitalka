import { queryOptions, useQuery } from '@tanstack/react-query';
import { publicFetchClient } from '@/shared/api/instance';

export function useQuickSearch(search?: string) {
    const QuickSearchQuery = queryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['get', '/manga/quick-search'],
        queryFn: async () =>
            await publicFetchClient
                .GET('/manga/quick-search', { params: { query: { search } } })
                .then((res) => res.data),
    });
    const { data, isFetching, refetch } = useQuery(QuickSearchQuery);

    return { data: data?.data, isFetching, refetch: () => refetch() };
}
