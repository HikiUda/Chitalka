import { useQueryClient } from '@tanstack/react-query';
import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeDeleteBookmark(ranobeId: BookId) {
    const queryClient = useQueryClient();
    const { mutate, isPending } = authRqClient.useMutation(
        'delete',
        '/ranobe/{ranobeId}/bookmark',
        {
            onSettled: async () => {
                await queryClient.invalidateQueries(
                    authRqClient.queryOptions('get', '/ranobe/{ranobeId}/bookmark', {
                        params: { path: { ranobeId } },
                    }),
                );
            },
        },
    );

    return {
        deleteBookmark: () => mutate({ params: { path: { ranobeId } } }),
        isDeletePending: isPending,
    };
}
