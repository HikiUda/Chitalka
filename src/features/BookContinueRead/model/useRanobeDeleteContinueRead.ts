import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';

export function useRanobeDeleteContinueRead() {
    const queryClient = useQueryClient();
    const [optimisticDeleted, setOptimisticDeleted] = useOptimistic<number[]>([]);
    const { mutateAsync } = authRqClient.useMutation('delete', '/continue-read/ranobe/{ranobeId}', {
        onSettled: async () =>
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/continue-read/ranobe'),
            ),
    });

    const deleteContinueReadRanobe = (ranobeId: number) => {
        startTransition(async () => {
            setOptimisticDeleted((prev) => [...prev, ranobeId]);
            await mutateAsync({ params: { path: { ranobeId } } });
        });
    };

    return {
        deleteContinueReadRanobe,
        getIsPending: (ranobeId: number) =>
            optimisticDeleted.includes(0) || optimisticDeleted.includes(ranobeId),
    };
}
