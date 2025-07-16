import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { authRqClient } from '@/shared/api/instance';

export function useDeleteLastQuickSearch() {
    const queryClient = useQueryClient();
    const [deleted, setDeleted] = useState<string[]>([]);
    const { mutate } = authRqClient.useMutation('delete', '/quick-search/manga/last', {
        onMutate: ({ body }) => setDeleted((prev) => prev.concat(body?.search)),
        onSuccess: (_, { body }) => {
            queryClient
                .invalidateQueries(authRqClient.queryOptions('get', '/quick-search/manga/last'))
                .then(() => setDeleted((prev) => prev.filter((item) => item !== body.search)));
        },
    });

    return {
        deleteLastSearch: (search: string) => mutate({ body: { search } }),
        getIsPending: (search: string) => deleted.includes(search),
    };
}
