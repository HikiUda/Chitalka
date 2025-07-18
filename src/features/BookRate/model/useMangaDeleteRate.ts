import { useQueryClient } from '@tanstack/react-query';
import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaDeleteRate(mangaId: BookId) {
    const queryClient = useQueryClient();
    const { mutate, isPending } = authRqClient.useMutation('delete', '/manga/{mangaId}/rate', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/manga/{mangaId}/rate', {
                    params: { path: { mangaId } },
                }),
            );
        },
    });

    return {
        deleteRate: () => mutate({ params: { path: { mangaId } } }),
        isDeletePending: isPending,
    };
}
