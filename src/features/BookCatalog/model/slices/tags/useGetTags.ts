import { useSuspenseQuery } from '@tanstack/react-query';
import { publicFetchClient } from '@/shared/api/instance';

export function useGetTags(search?: string) {
    const { data, refetch } = useSuspenseQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['tags'],
        queryFn: async () =>
            await publicFetchClient
                .GET('/book/tags', { params: { query: { search } } })
                .then((res) => res.data?.data || []),
    });
    return { data, refetch };
}
