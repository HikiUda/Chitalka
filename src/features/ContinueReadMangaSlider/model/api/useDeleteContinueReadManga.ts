import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ContinueReadMangaApi } from './continueReadMangaApi';

export const useDeleteContinueReadManga = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: ContinueReadMangaApi.deleteContinueReadManga,
        onSettled: () =>
            queryClient.invalidateQueries(ContinueReadMangaApi.getContinueReadMangaQueryOptions()),
        onSuccess: (_, mangaId) => {
            const mangas = queryClient.getQueryData(
                ContinueReadMangaApi.getContinueReadMangaQueryOptions().queryKey,
            );
            if (mangas) {
                const setData = mangaId === 0 ? [] : mangas.filter((manga) => manga.id !== mangaId);
                queryClient.setQueryData(
                    ContinueReadMangaApi.getContinueReadMangaQueryOptions().queryKey,
                    setData,
                );
            }
        },
    });

    return {
        deleteContinueReadManga: mutate.mutate,
        getIsPending: (id: number) =>
            (mutate.isPending && mutate.variables === id) || mutate.variables === 0,
    };
};
