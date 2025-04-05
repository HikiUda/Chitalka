import { $api } from '@packages/model/src/api/baseApi/kyBase';
import { useQuery } from '@tanstack/react-query';
import type { Pagination } from '@packages/model/src/types/pagination';
import { MangaListItemContinueReadType, MangaListItemLastUpdatedType } from '@/entities/MangaCard';

export type MangaListItemLastUpdatedTypeScope = 'all' | 'popular' | 'my';
export type MangaListItemLastUpdatedTypePagination = Pagination<MangaListItemLastUpdatedType>;

export const QUERY_KEY_GET_CONTINUE_READ_MANGA = 'continueReadManga';

export const useGetContinueReadManga = () => {
    //TODO add lang
    const query = useQuery({
        queryKey: ['continueReadManga'],
        queryFn: async () => {
            const data = await $api
                .get<MangaListItemContinueReadType[]>('manga/continue-read')
                .json();
            return data;
        },
        retry: 1,
    });
    return query;
};
