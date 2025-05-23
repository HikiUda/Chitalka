import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';
import { BookmarksType, MangaIdType } from '@/shared/kernel/manga';

export function useSetBookmark(mangaId: MangaIdType) {
    const queryClient = useQueryClient();
    const [optimisticBookmark, setOptimisticBookmark] = useOptimistic<BookmarksType | null>(null);
    const { mutateAsync } = authRqClient.useMutation('patch', '/manga/byId/{id}/bookmark', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/manga/byId/{id}/bookmark', {
                    params: { path: { id: String(mangaId) } },
                }),
            );
        },
    });

    const setBookmark = (bookmark: BookmarksType) => {
        startTransition(async () => {
            //? handle possible error
            setOptimisticBookmark(bookmark);
            await mutateAsync({ params: { path: { id: String(mangaId) } }, body: { bookmark } });
        });
    };

    const getOptimisticBookmark = (
        bookmark: BookmarksType | null | undefined,
        isDeleting?: boolean,
    ) => {
        if (isDeleting) return null;
        return optimisticBookmark || bookmark;
    };

    return {
        setBookmark,
        getOptimisticBookmark,
    };
}
