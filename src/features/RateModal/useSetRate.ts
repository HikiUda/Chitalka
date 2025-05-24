import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';

export function useSetRate(mangaId: MangaIdType) {
    const queryClient = useQueryClient();
    const [optimisticRate, setOptimisticRate] = useOptimistic<number | null>(null);
    const { mutateAsync } = authRqClient.useMutation('patch', '/manga/byId/{id}/rate', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/manga/byId/{id}/rate', {
                    params: { path: { id: String(mangaId) } },
                }),
            );
        },
    });

    const setRate = (rate: number) => {
        startTransition(async () => {
            setOptimisticRate(rate);
            await mutateAsync({
                params: { path: { id: String(mangaId) } },
                body: { rate },
            });
        });
    };

    const getOptimisticRate = (rate: number | null | undefined) => {
        return optimisticRate || rate;
    };

    return {
        setRate,
        getOptimisticRate,
    };
}
