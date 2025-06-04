import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { parseISO } from 'date-fns';
import { ApiSchemas, publicFetchClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';

const handleMangaChapters = (
    data:
        | {
              prevPage: number | null;
              nextPage: number | null;
              data: ApiSchemas['ChapterListItemDto'][];
          }
        | undefined,
) => {
    return (
        data && {
            ...data,
            data: data.data.map((chapter) => ({
                ...chapter,
                createdAt: parseISO(chapter.createdAt),
            })),
        }
    );
};

export function useMangaChapters(mangaId: MangaIdType, search: string, order: 'asc' | 'desc') {
    const queryOptions = infiniteQueryOptions({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['get', '/manga/{mangaId}/chapters', 30],
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
                .then((res) => handleMangaChapters(res.data)),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

    const { data, fetchNextPage, isFetching, isFetchingNextPage, refetch } =
        useInfiniteQuery(queryOptions);

    const clear = useClearInfinityPages(queryOptions.queryKey);

    useEffect(() => {
        return () => {
            clear();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRefetch = () => {
        clear();
        refetch();
    };

    return {
        data: data?.pages.flatMap((page) => page?.data || []),
        fetchNextPage,
        isFetching: isFetchingNextPage || isFetching,
        refetch: handleRefetch,
    };
}
