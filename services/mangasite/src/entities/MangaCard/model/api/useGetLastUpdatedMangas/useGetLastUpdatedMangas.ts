import { $api } from '@packages/model/src/api/baseApi/kyBase';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { Pagination } from '@packages/model/src/types/pagination';
import { MangaListItemLastUpdatedType } from '../../types/mangaListItemLastUpdated';
// eslint-disable-next-line fsd-layer-import/layer-import

export type MangaListItemLastUpdatedTypeScope = 'all' | 'popular' | 'my';
export type MangaListItemLastUpdatedTypePagination = Pagination<MangaListItemLastUpdatedType>;

export const useGetLastUpdatedMangas = (
    scope: MangaListItemLastUpdatedTypeScope = 'all',
    limit: number = 10,
) => {
    //TODO add lang
    const query = useInfiniteQuery({
        queryKey: ['lastUpdatedMangas', scope, limit],
        queryFn: async ({ pageParam }) => {
            const data = await $api
                .get<MangaListItemLastUpdatedTypePagination>('manga/last-updated-mangas', {
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
