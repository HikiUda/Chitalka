import { useMutation, useQueryClient } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/baseApi/kyBase';
import { MangaIdType } from '@packages/model/src/entities/manga/types/types';
import { UserMangaBookmarkType } from '../types/userMangaBookmark';

export const useDeleteUserMangaBookmark = (id: MangaIdType) => {
    const queryClient = useQueryClient();
    const { mutate: deleteBookmark } = useMutation({
        mutationFn: async () => {
            await $api.delete<UserMangaBookmarkType>(`manga/byId/${id}/bookmark`).json();
        },
        onSuccess: () => {
            //TODO Optimistic updated
            queryClient.invalidateQueries({ queryKey: ['manga', 'bookmark', id] });
        },
    });

    return deleteBookmark;
};
