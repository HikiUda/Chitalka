import { $apiManga } from '@packages/model/src/api/baseApi/kyBase';
import { useQuery } from '@tanstack/react-query';
import type { ResponseArrayData } from '@packages/model/src/types/pagination';
import { MangaListItemContinueReadType } from '@/entities/MangaCard';

export type MangaListItemContinueReadArrayData = ResponseArrayData<MangaListItemContinueReadType>;

export const GET_CONTINUE_READ_MANGA = 'continue-read';

export const useGetContinueReadManga = () => {
    //TODO add lang
    const query = useQuery({
        queryKey: [GET_CONTINUE_READ_MANGA],
        queryFn: async () => {
            const data = await $apiManga
                .get<MangaListItemContinueReadArrayData>(GET_CONTINUE_READ_MANGA)
                .json();
            return data.data;
        },
    });
    return query;
};
