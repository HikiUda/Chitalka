import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';

export function useRanobeQuickSearchDeleteLast() {
    const queryClient = useQueryClient();
    const [optimisticDeleted, setOptimisticDeleted] = useOptimistic<string[]>([]);
    const { mutateAsync } = authRqClient.useMutation('delete', '/quick-search/ranobe/last', {
        onSuccess: () => {
            queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/quick-search/ranobe/last'),
            );
        },
    });

    const quickSearchDeleteLast = (search: string) => {
        startTransition(async () => {
            setOptimisticDeleted((prev) => [...prev, search]);
            await mutateAsync({ body: { search } });
        });
    };

    return {
        quickSearchDeleteLast,
        getIsPending: (search: string) => optimisticDeleted.includes(search),
    };
}
