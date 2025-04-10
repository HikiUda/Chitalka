import { $apiManga } from '@packages/model/src/api/baseApi/kyBase';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { Pagination } from '@packages/model/src/types/pagination';
import { MangaListItemLastUpdatedType } from '../../types/mangaListItemLastUpdated';

export type MangaListItemLastUpdatedTypeScope = 'all' | 'popular' | 'my';
export type MangaListItemLastUpdatedTypePagination = Pagination<MangaListItemLastUpdatedType>;

export const GET_LAST_UPDATED_MANGA = 'last-updated-manga';

export const useGetLastUpdatedMangas = (
    scope: MangaListItemLastUpdatedTypeScope = 'all',
    limit: number = 10,
) => {
    //TODO add lang
    const query = useInfiniteQuery({
        queryKey: [GET_LAST_UPDATED_MANGA, scope, limit],
        queryFn: async ({ pageParam }) => {
            const data = await $apiManga
                .get<MangaListItemLastUpdatedTypePagination>(GET_LAST_UPDATED_MANGA, {
                    searchParams: {
                        limit,
                        page: pageParam,
                        scope,
                    },
                })
                .json();

            return data;
        },
        initialPageParam: 1,
        getNextPageParam: (result) => result.nextPage,
        select: (result) => result.pages.flatMap((page) => page.data),
    });
    return query;
};
