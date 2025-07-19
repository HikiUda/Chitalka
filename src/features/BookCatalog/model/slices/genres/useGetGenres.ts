import { useSuspenseQuery } from '@tanstack/react-query';
import { publicFetchClient } from '@/shared/api/instance';

export function useGetGenres(search?: string) {
    const { data, refetch } = useSuspenseQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['genres'],
        queryFn: async () =>
            await publicFetchClient
                .GET('/book/genres', { params: { query: { search } } })
                .then((res) => res.data?.data || []),
    });
    return { data, refetch };
}
