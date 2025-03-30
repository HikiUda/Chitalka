import { useMutation, useQueryClient } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/base';
import { QUERY_KEY_GET_USER_LAST_SEARCHQEURIES } from './useGetUserLastSearchQueries';

export const useDeleteUserLastSearchQuery = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: async (search: string) => {
            await $api.delete('/manga/user-last-search-query', { data: { search } });
        },
        onSuccess: (_, search) => {
            const lastSearch = queryClient.getQueryData([
                QUERY_KEY_GET_USER_LAST_SEARCHQEURIES,
            ]) as string[];
            if (lastSearch) {
                queryClient.setQueryData(
                    [QUERY_KEY_GET_USER_LAST_SEARCHQEURIES],
                    lastSearch.filter((s) => s !== search),
                );
            }
        },
    });

    return mutate.mutate;
};
