import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { MangaCatalogFiltersType } from './useApplyMangaCatalogFilters';
import { useInitMangaCatalogFilters } from './useInitMangaCatalogFilters';
import { publicFetchClient } from '@/shared/api/instance';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';

const MangaCatalogQueryOptions = (filters: MangaCatalogFiltersType) =>
    infiniteQueryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['catalog', 'manga'],
        queryFn: async ({ pageParam }) =>
            await publicFetchClient
                .GET('/catalog/manga', {
                    params: {
                        query: {
                            ...filters,
                            limit: 30,
                            page: pageParam,
                        },
                    },
                })
                .then((res) => res.data),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

export function useGetMangaCatalog() {
    const { appliedFilters } = useInitMangaCatalogFilters();
    const { data, isFetching, isFetchingNextPage, refetch, fetchNextPage } = useInfiniteQuery(
        MangaCatalogQueryOptions(appliedFilters),
    );

    const clear = useClearInfinityPages(MangaCatalogQueryOptions({}).queryKey);

    const handleRefetch = () => {
        clear();
        refetch();
    };

    useEffect(() => {
        return () => {
            clear();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleRefetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appliedFilters]);

    return {
        data: data?.pages.flatMap((page) => page?.data || []),
        isFetching: isFetching || isFetchingNextPage,
        refetch: handleRefetch,
        fetchNextPage,
    };
}
