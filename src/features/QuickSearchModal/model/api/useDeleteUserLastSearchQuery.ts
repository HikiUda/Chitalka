import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QuickSearchApi } from './quickSearch';

export const useDeleteUserLastSearchQuery = () => {
    const queryClient = useQueryClient();
    const { mutate, variables, isPending } = useMutation({
        mutationFn: (search: string) => QuickSearchApi.deleteLastSearch(search),
        onSuccess: (_, search) => {
            const lastSearch = queryClient.getQueryData(
                QuickSearchApi.getLastSearchQueryOptions().queryKey,
            );
            if (lastSearch) {
                queryClient.setQueryData(
                    QuickSearchApi.getLastSearchQueryOptions().queryKey,
                    lastSearch.filter((s) => s !== search),
                );
            }
        },
    });

    return {
        deleteLastSearch: mutate,
        getIsPending: (search: string) => isPending && variables === search,
    };
};
