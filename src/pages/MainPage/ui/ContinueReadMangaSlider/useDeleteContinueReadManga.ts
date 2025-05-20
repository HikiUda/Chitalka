import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { authRqClient } from '@/shared/api/instance';

export function useDeleteContinueReadManga() {
    const queryClient = useQueryClient();
    const [deleted, setDeleted] = useState<number[]>([]);
    const { mutate, isPending } = authRqClient.useMutation('patch', '/manga/continue-read/{id}', {
        onMutate: ({ params }) => {
            setDeleted((prev) => [...prev, params.path.id]);
        },
        onSettled: () =>
            queryClient.invalidateQueries(authRqClient.queryOptions('get', '/manga/continue-read')),
    });

    return {
        deleteContinueReadManga: (id: number) => mutate({ params: { path: { id } } }),
        getIsPending: (id: number) => isPending && (deleted.includes(id) || deleted.includes(0)),
    };
}
