import { useQueryClient } from '@tanstack/react-query';
import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeDeleteRate(ranobeId: BookId) {
    const queryClient = useQueryClient();
    const { mutate, isPending } = authRqClient.useMutation('delete', '/ranobe/{ranobeId}/rate', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/ranobe/{ranobeId}/rate', {
                    params: { path: { ranobeId } },
                }),
            );
        },
    });

    return {
        deleteRate: () => mutate({ params: { path: { ranobeId } } }),
        isDeletePending: isPending,
    };
}
