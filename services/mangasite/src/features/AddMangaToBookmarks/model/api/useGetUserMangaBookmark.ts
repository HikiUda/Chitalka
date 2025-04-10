import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/baseApi/kyBase';
import { MangaIdType } from '@packages/model/src/entities/manga/types/types';
import { UserMangaBookmarkType } from '../types/userMangaBookmark';

export const useGetUserMangaBookmark = (id: MangaIdType) => {
    const query = useQuery({
        queryKey: ['manga', 'bookmark', id],
        queryFn: async () => {
            const res = await $api.get<UserMangaBookmarkType>(`manga/byId/${id}/bookmark`).json();
            return res;
        },
    });

    return query;
};
