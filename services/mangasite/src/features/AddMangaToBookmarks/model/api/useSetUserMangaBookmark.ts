import { useMutation, useQueryClient } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/baseApi/kyBase';
import { BookmarksType, MangaIdType } from '@packages/model/src/entities/manga/types/types';
import { UserMangaBookmarkType } from '../types/userMangaBookmark';

export const useSetUserMangaBookmark = (id: MangaIdType) => {
    const queryClient = useQueryClient();
    const { mutate: setBookmark } = useMutation({
        mutationFn: async (bookmark: BookmarksType) => {
            const res = await $api
                .patch<UserMangaBookmarkType>(`manga/byId/${id}/bookmark`, { json: { bookmark } })
                .json();
            return res;
        },
        onSuccess: () => {
            //TODO Optimistic updated
            queryClient.invalidateQueries({ queryKey: ['manga', 'bookmark', id] });
        },
    });

    return setBookmark;
};
