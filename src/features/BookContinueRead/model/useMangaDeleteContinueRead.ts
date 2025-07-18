import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';

export function useMangaDeleteContinueRead() {
    const queryClient = useQueryClient();
    const [optimisticDeleted, setOptimisticDeleted] = useOptimistic<number[]>([]);
    const { mutateAsync } = authRqClient.useMutation('delete', '/continue-read/manga/{mangaId}', {
        onSettled: async () =>
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/continue-read/manga'),
            ),
    });

    const deleteContinueReadManga = (mangaId: number) => {
        startTransition(async () => {
            setOptimisticDeleted((prev) => [...prev, mangaId]);
            await mutateAsync({ params: { path: { mangaId } } });
        });
    };

    return {
        deleteContinueReadManga,
        getIsPending: (mangaId: number) =>
            optimisticDeleted.includes(0) || optimisticDeleted.includes(mangaId),
    };
}
