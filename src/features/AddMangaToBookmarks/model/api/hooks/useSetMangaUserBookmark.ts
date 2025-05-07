import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookmarksType, MangaIdType } from '@/shared/entities/manga';
import { MangaUserBookmarkApi } from '../mangaUserBookmarkApi';

export const useSetMangaUserBookmark = (id: MangaIdType) => {
    const queryClient = useQueryClient();
    const { mutate: setBookmark, isPending } = useMutation({
        mutationFn: (bookmark: BookmarksType) => MangaUserBookmarkApi.set(id, bookmark),

        onSuccess: (_, bookmark) => {
            const prevBookmark = queryClient.getQueryData(
                MangaUserBookmarkApi.getQueryOption(id).queryKey,
            );
            if (prevBookmark) {
                queryClient.setQueryData(MangaUserBookmarkApi.getQueryOption(id).queryKey, {
                    ...prevBookmark,
                    bookmark,
                });
            }
        },
    });

    return { setBookmark, isPending };
};
