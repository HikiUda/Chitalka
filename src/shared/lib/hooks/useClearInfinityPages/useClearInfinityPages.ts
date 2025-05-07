import { useQueryClient } from '@tanstack/react-query';

export function useClearInfinityPages(queryKey: (number | string)[]) {
    const queryClient = useQueryClient();

    const clearPages = () => {
        const data = queryClient.getQueryData<{ pages?: unknown[]; pageParams: number[] }>(
            queryKey,
        );

        if (data?.pages && data?.pageParams) {
            queryClient.setQueryData(queryKey, { pages: data.pages.slice(0, 1), pageParams: [1] });
        }
    };
    return clearPages;
}
