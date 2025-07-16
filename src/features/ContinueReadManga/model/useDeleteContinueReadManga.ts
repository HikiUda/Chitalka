import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { authRqClient } from '@/shared/api/instance';

export function useDeleteContinueReadManga() {
    const queryClient = useQueryClient();
    const [deleted, setDeleted] = useState<number[]>([]);
    const { mutate } = authRqClient.useMutation('delete', '/continue-read/manga/{mangaId}', {
        onMutate: ({ params }) => {
            setDeleted((prev) => [...prev, Number(params.path.mangaId)]);
        },
        onSettled: (_, __, { params }) =>
            queryClient
                .invalidateQueries(authRqClient.queryOptions('get', '/continue-read/manga'))
                .then(() => setDeleted((prev) => prev.filter((id) => id !== params.path.mangaId))),
    });
    return {
        deleteContinueReadManga: (mangaId: number) => mutate({ params: { path: { mangaId } } }),
        getIsPending: (id: number) => deleted.includes(0) || deleted.includes(id),
    };
}
