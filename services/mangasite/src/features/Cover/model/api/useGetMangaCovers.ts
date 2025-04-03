import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/kyBase';

export interface MangaCoverstypes {
    id: number;
    cover: string;
}

export const useGetMangaCovers = (id: number | string) => {
    const query = useQuery({
        queryKey: ['manga', 'covers', id],
        queryFn: async () => {
            const covers = await $api.get<MangaCoverstypes[]>(`manga/edit/${id}/cover`).json();
            return covers;
        },
    });

    return query;
};
