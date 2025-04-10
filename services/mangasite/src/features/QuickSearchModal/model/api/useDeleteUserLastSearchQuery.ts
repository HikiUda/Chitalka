import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QuickSearch } from '@/shared/api/mangaList';

export const useDeleteUserLastSearchQuery = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (search: string) => QuickSearch.deleteLastSearch(search),
        onSuccess: (_, search) => {
            const lastSearch = queryClient.getQueryData(
                QuickSearch.getLastSearchQueryOptions().queryKey,
            );
            if (lastSearch) {
                queryClient.setQueryData(
                    QuickSearch.getLastSearchQueryOptions().queryKey,
                    lastSearch.filter((s) => s !== search),
                );
            }
        },
    });

    return mutate.mutate;
};
