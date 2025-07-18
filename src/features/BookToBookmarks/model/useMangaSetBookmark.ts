import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';
import { Bookmarks, BookId } from '@/shared/kernel/book';

export function useMangaSetBookmark(mangaId: BookId) {
    const queryClient = useQueryClient();
    const [optimisticBookmark, setOptimisticBookmark] = useOptimistic<Bookmarks | null>(null);
    const { mutateAsync } = authRqClient.useMutation('patch', '/manga/{mangaId}/bookmark', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/manga/{mangaId}/bookmark', {
                    params: { path: { mangaId } },
                }),
            );
        },
    });

    const setBookmark = (bookmark: Bookmarks, chapterId: number | null = null) => {
        startTransition(async () => {
            setOptimisticBookmark(bookmark);
            await mutateAsync({
                params: { path: { mangaId } },
                body: { bookmark, chapterId },
            });
        });
    };

    const getOptimisticBookmark = (
        bookmark: Bookmarks | null | undefined,
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
