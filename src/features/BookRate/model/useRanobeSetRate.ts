import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeSetRate(ranobeId: BookId) {
    const queryClient = useQueryClient();
    const [optimisticRate, setOptimisticRate] = useOptimistic<number | null>(null);
    const { mutateAsync } = authRqClient.useMutation('patch', '/ranobe/{ranobeId}/rate', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/ranobe/{ranobeId}/rate', {
                    params: { path: { ranobeId } },
                }),
            );
        },
    });

    const setRate = (rate: number) => {
        startTransition(async () => {
            setOptimisticRate(rate);
            await mutateAsync({
                params: { path: { ranobeId } },
                body: { rate },
            });
        });
    };

    const getOptimisticRate = (rate: number | null | undefined, isDeleting?: boolean) => {
        if (isDeleting) return null;
        return optimisticRate || rate;
    };

    return {
        setRate,
        getOptimisticRate,
    };
}
