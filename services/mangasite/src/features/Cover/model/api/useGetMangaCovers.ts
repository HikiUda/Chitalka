import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/baseApi/kyBase';
import { MangaIdType } from '@packages/model/src/entities/manga/types/types';

export interface MangaCoverstypes {
    id: number;
    cover: string;
}

export const useGetMangaCovers = (id: MangaIdType) => {
    const query = useQuery({
        queryKey: ['manga', 'covers', id],
        queryFn: async () => {
            const covers = await $api.get<MangaCoverstypes[]>(`manga/edit/${id}/cover`).json();
            return covers;
        },
    });

    return query;
};
