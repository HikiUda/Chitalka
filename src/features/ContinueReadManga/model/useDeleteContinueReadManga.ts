import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { authRqClient } from '@/shared/api/instance';

export function useDeleteContinueReadManga() {
    const queryClient = useQueryClient();
    const [deleted, setDeleted] = useState<number[]>([]);
    const { mutate } = authRqClient.useMutation('patch', '/manga/continue-read/{id}', {
        onMutate: ({ params }) => {
            setDeleted((prev) => [...prev, params.path.id]);
        },
        onSettled: (_, __, { params }) =>
            queryClient
                .invalidateQueries(authRqClient.queryOptions('get', '/manga/continue-read'))
                .then(() => setDeleted((prev) => prev.filter((id) => id !== params.path.id))),
    });
    return {
        deleteContinueReadManga: (id: number) => mutate({ params: { path: { id } } }),
        getIsPending: (id: number) => deleted.includes(0) || deleted.includes(id),
    };
}
