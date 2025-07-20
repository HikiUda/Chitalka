import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { MangaCatalogFilters } from './useMangaCatalogApplyFilters';
import { useMangaCatalogInitFilters } from './useMangaCatalogInitFilters';
import { useMangaCatalogFiltersStore } from './useMangaCatalogFiltersStore';
import { publicFetchClient } from '@/shared/api/instance';

// * QueryOptions
const MangaCatalogQueryOptions = (filters: MangaCatalogFilters, startPage: number = 1) =>
    infiniteQueryOptions({
        queryKey: ['catalog', 'manga', filters, startPage],
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
        initialPageParam: startPage,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
        maxPages: 10,
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 30,
    });
// * QueryOptions

// * Query hook
export function useGetMangaCatalog() {
    const { initFilters, isInit } = useMangaCatalogInitFilters();
    const appliedFilters = useMangaCatalogFiltersStore.use.appliedFilters();
    const { data, isFetching, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
        ...MangaCatalogQueryOptions(appliedFilters),
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
