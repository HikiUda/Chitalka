import { useQuery } from '@tanstack/react-query';
import { $api } from '../kyBase';
import { MangaType } from './types/manga';

export const useGetManga = (id: number | string) => {
    const query = useQuery({
        queryKey: ['manga', id],
        queryFn: async () => {
            const manga = await $api.get<MangaType>(`manga/byId/${id}`).json();
            return manga;
        },
    });

    return query;
};
