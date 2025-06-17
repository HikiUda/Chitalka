import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { handleBookChapters } from './handleBookChapters';
import { publicFetchClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

type Order = 'asc' | 'desc';

const queryOptions = (mangaId: MangaIdType, search?: string, order?: Order) =>
    infiniteQueryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['get', '/manga/{mangaId}/chapters', mangaId, 30],
        queryFn: async ({ pageParam }) =>
            await publicFetchClient
                .GET('/manga/{mangaId}/chapters', {
                    params: {
                        path: {
                            mangaId: String(mangaId),
                        },
                        query: {
                            search,
                            order,
                            limit: 30,
                            page: pageParam,
                        },
                    },
                })
                .then((res) => handleBookChapters(res.data)),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

export function useGetMangaChapters(mangaId: MangaIdType) {
    const [order, setOrder] = useState<Order>('desc');
    const [search, setSearch] = useState('');

    const { data, fetchNextPage, isFetching, isFetchingNextPage, refetch } = useInfiniteQuery(
        queryOptions(mangaId, search, order),
    );

    const clear = useClearInfinityPages(queryOptions(mangaId).queryKey);

    useEffect(() => {
        return () => {
            clear();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRefetch = useDebounce(() => {
        clear();
        refetch();
    }, 500);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            handleRefetch();
        },
        [handleRefetch],
    );

    const handleSetOrder = useCallback(
        (value: Order) => {
            setOrder(value);
            handleRefetch();
        },
        [handleRefetch],
    );

    return {
        data: data?.pages.flatMap((page) => page?.data || []),
        fetchNextPage,
        isFetching: isFetchingNextPage || isFetching,
        order: {
            value: order,
            onChange: handleSetOrder,
        },
        search: {
            value: search,
            onChangeValue: handleSetSearch,
        },
    };
}
