import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MangaIdType } from '@/shared/kernel/manga';
import { MangaUserBookmarkApi } from '../mangaUserBookmarkApi';

export const useDeleteUserMangaBookmark = (id: MangaIdType) => {
    const queryClient = useQueryClient();
    const { mutate: deleteBookmark, isPending } = useMutation({
        mutationFn: () => MangaUserBookmarkApi.delete(id),
        onSuccess: () => {
            const prevBookmark = queryClient.getQueryData(
                MangaUserBookmarkApi.getQueryOption(id).queryKey,
            );
            if (prevBookmark) {
                queryClient.setQueryData(MangaUserBookmarkApi.getQueryOption(id).queryKey, {
                    ...prevBookmark,
                    bookmark: null,
                });
            }
        },
    });

    return { deleteBookmark, isPending };
};
