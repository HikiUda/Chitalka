import { $api } from '@packages/model/src/api/base';
import { MangaListItemLastUpdated } from '@packages/ui/src/entities/MangaCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { Pagination } from '@packages/model/src/types/pagination';

export type MangaListItemLastUpdatedScope = 'all' | 'popular' | 'my';
export type MangaListItemLastUpdatedPagination = Pagination<MangaListItemLastUpdated>;

export const useGetLastUpdatedMangas = (
    scope: MangaListItemLastUpdatedScope = 'all',
    limit: number = 10,
) => {
    //TODO add lang
    const query = useInfiniteQuery({
        queryKey: ['lastUpdatedMangas', scope, limit],
        queryFn: async ({ pageParam }) => {
            const data = await $api.get<MangaListItemLastUpdatedPagination>(
                'manga/last-updated-mangas',
                {
                    params: {
                        limit,
                        page: pageParam,
                        scope,
                    },
                },
            );
            return data.data;
        },
        initialPageParam: 1,
        getNextPageParam: (result) => result.nextPage,
        select: (result) => result.pages.flatMap((page) => page.data),
    });
    return query;
};
