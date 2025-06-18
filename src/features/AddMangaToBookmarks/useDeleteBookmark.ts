import { useQueryClient } from '@tanstack/react-query';
import { authRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/book';

export function useDeleteBookmark(mangaId: MangaIdType) {
    const queryClient = useQueryClient();
    const { mutate, isPending } = authRqClient.useMutation('delete', '/manga/byId/{id}/bookmark', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/manga/byId/{id}/bookmark', {
                    params: { path: { id: String(mangaId) } },
                }),
            );
        },
    });

    return {
        deleteBookmark: () => mutate({ params: { path: { id: String(mangaId) } } }),
        isDeletePending: isPending,
    };
}
