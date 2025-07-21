import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { RanobeCatalogFilters } from './useRanobeCatalogApplyFilters';
import { useRanobeCatalogInitFilters } from './useRanobeCatalogInitFilters';
import { useRanobeCatalogFiltersStore } from './useRanobeCatalogFiltersStore';
import { publicFetchClient } from '@/shared/api/instance';

// * QueryOptions
const RanobeCatalogQueryOptions = (filters: RanobeCatalogFilters, startPage: number = 1) =>
    infiniteQueryOptions({
        queryKey: ['catalog', 'ranobe', filters, startPage],
        queryFn: async ({ pageParam }) =>
            await publicFetchClient
                .GET('/catalog/ranobe', {
                    params: {
                        query: {
                            ...filters,
                            limit: 30,
                            page: pageParam,
                        },
                    },
                })
                .then((res) => res.data),
        initialPageParam: startPage,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
        maxPages: 10,
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 30,
    });
// * QueryOptions

// * Query hook
export function useGetRanobeCatalog() {
    const { initFilters, isInit } = useRanobeCatalogInitFilters();
    const appliedFilters = useRanobeCatalogFiltersStore.use.appliedFilters();
    const { data, isFetching, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
        ...RanobeCatalogQueryOptions(appliedFilters),
        enabled: isInit,
    });

    useEffect(() => {
        initFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data: data?.pages.flatMap((page) => page?.data || []),
        isFetching: !isInit || isFetching || isFetchingNextPage,
        fetchNextPage,
    };
}
