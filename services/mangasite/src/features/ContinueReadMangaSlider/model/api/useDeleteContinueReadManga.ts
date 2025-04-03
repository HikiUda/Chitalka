import { useMutation, useQueryClient } from '@tanstack/react-query';

import { $api } from '@packages/model/src/api/kyBase';
import { MangaListItemContinueReadType } from '@packages/ui/src/entities/MangaCard';
import { QUERY_KEY_GET_CONTINUE_READ_MANGA } from './useGetContinueReadManga';
export const useDeleteContinueReadManga = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (mangaId: number) => $api.patch(`manga/continue-read/${mangaId}`),
        onSuccess: (_, mangaId) => {
            const mangas = queryClient.getQueryData([
                QUERY_KEY_GET_CONTINUE_READ_MANGA,
            ]) as MangaListItemContinueReadType[];
            if (mangas) {
                if (mangaId === 0) {
                    queryClient.setQueryData([QUERY_KEY_GET_CONTINUE_READ_MANGA], []);
                } else {
                    queryClient.setQueryData(
                        [QUERY_KEY_GET_CONTINUE_READ_MANGA],
                        mangas.filter((manga) => manga.id !== mangaId),
                    );
                }
            }
        },
    });

    return { deleteContinueReadManga: mutate.mutate };
};
