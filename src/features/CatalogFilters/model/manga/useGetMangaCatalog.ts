import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { MangaCatalogFiltersType } from './useApplyMangaFilters';
import { useMangaCatalogFiltersStore } from './mangaCatalogFiltersStore';
import { publicFetchClient } from '@/shared/api/instance';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';

export const MangaCatalogQueryOptions = (filters: MangaCatalogFiltersType) =>
    infiniteQueryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['manga', 'catalog'],
        queryFn: async ({ pageParam }) =>
            await publicFetchClient
                .GET('/manga', {
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
    const clear = useClearInfinityPages(MangaCatalogQueryOptions({}).queryKey);

    useEffect(() => {
        return () => {
            clear();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const appliedFilters = useMangaCatalogFiltersStore.use.appliedFilters();
    const { data, isFetching, isFetchingNextPage, refetch, fetchNextPage } = useInfiniteQuery(
        MangaCatalogQueryOptions(appliedFilters),
    );

    const handleRefetch = () => {
        clear();
        refetch();
    };

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
