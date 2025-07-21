import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { handleBookChapters } from '../handleBookChapters';
import { Order, useOrderSearchBookChapters } from '../useOrderSearchBookChapters';
import { publicFetchClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';

// * QueryOptions
const queryOptions = (mangaId: BookId, search?: string, order?: Order) =>
    infiniteQueryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['get', '/manga/{mangaId}/chapters', mangaId, 30],
        queryFn: async ({ pageParam }) =>
            await publicFetchClient
                .GET('/manga/{mangaId}/chapters', {
                    params: {
                        path: { mangaId },
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
// * QueryOptions

export function useMangaGetChapterList(mangaId: BookId) {
    const [order, setOrder] = useState<Order>('desc');
    const [search, setSearch] = useState('');

    const { data, fetchNextPage, isFetching, isFetchingNextPage, refetch } = useInfiniteQuery(
        queryOptions(mangaId, search, order),
    );

    const clear = useClearInfinityPages(queryOptions(mangaId).queryKey);
    useEffect(() => {
        return () => clear();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRefetch = () => {
        clear();
        refetch();
    };

    const orderSearch = useOrderSearchBookChapters({
        refetch: handleRefetch,
        order,
        search,
        setOrder,
        setSearch,
    });

    return {
        chapters: data?.pages.flatMap((page) => page?.data || []),
        fetchNextPage,
        isFetching: isFetchingNextPage || isFetching,
        ...orderSearch,
    };
}
