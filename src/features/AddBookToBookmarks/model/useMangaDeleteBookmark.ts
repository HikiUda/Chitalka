import { useQueryClient } from '@tanstack/react-query';
import { authRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useMangaDeleteBookmark(mangaId: BookIdType) {
    const queryClient = useQueryClient();
    const { mutate, isPending } = authRqClient.useMutation('delete', '/manga/{mangaId}/bookmark', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/manga/{mangaId}/bookmark', {
                    params: { path: { mangaId } },
                }),
            );
        },
    });

    return {
        deleteBookmark: () => mutate({ params: { path: { mangaId } } }),
        isDeletePending: isPending,
    };
}
