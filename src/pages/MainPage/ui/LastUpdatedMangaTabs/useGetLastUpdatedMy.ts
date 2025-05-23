import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { authFetchClient } from '@/shared/api/instance';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';

export function useGetLastUpdatedMy() {
    const queryOptions = infiniteQueryOptions({
        queryKey: ['get', '/manga/last-updated', 'my', 10],
        queryFn: async ({ pageParam }) =>
            await authFetchClient
                .GET('/manga/last-updated', {
                    params: {
                        query: {
                            scope: 'my',
                            limit: 10,
                            page: pageParam,
                        },
                    },
                })
                .then((data) => data.data),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

    const { data, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } =
        useInfiniteQuery(queryOptions);

    const clear = useClearInfinityPages(queryOptions.queryKey);

    useEffect(() => {
        return () => {
            clear();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data: data?.pages.flatMap((page) => page?.data || []),
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
    };
}
