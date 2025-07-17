import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book/book';

export function useMangaSetRate(mangaId: BookIdType) {
    const queryClient = useQueryClient();
    const [optimisticRate, setOptimisticRate] = useOptimistic<number | null>(null);
    const { mutateAsync } = authRqClient.useMutation('patch', '/manga/{mangaId}/rate', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/manga/{mangaId}/rate', {
                    params: { path: { mangaId } },
                }),
            );
        },
    });

    const setRate = (rate: number) => {
        startTransition(async () => {
            setOptimisticRate(rate);
            await mutateAsync({
                params: { path: { mangaId } },
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
