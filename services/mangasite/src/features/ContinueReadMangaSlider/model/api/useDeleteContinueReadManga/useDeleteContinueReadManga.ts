import { useMutation, useQueryClient } from '@tanstack/react-query';

import { $apiManga } from '@packages/model/src/api/baseApi/kyBase';
import { GET_CONTINUE_READ_MANGA } from '../useGetContinueReadManga/useGetContinueReadManga';
import { MangaListItemContinueReadType } from '@/entities/MangaCard';
export const useDeleteContinueReadManga = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (mangaId: number) => $apiManga.patch(`${GET_CONTINUE_READ_MANGA}/${mangaId}`),
        onSettled: () => queryClient.invalidateQueries({ queryKey: [GET_CONTINUE_READ_MANGA] }),
        onSuccess: (_, mangaId) => {
            const mangas = queryClient.getQueryData<MangaListItemContinueReadType[]>([
                GET_CONTINUE_READ_MANGA,
            ]);
            if (mangas) {
                if (mangaId === 0) {
                    queryClient.setQueryData([GET_CONTINUE_READ_MANGA], []);
                } else {
                    queryClient.setQueryData(
                        [GET_CONTINUE_READ_MANGA],
                        mangas.filter((manga) => manga.id !== mangaId),
                    );
                }
            }
        },
    });

    return {
        deleteContinueReadManga: mutate.mutate,
        getIsPending: (id: number) =>
            (mutate.isPending && mutate.variables === id) || mutate.variables === 0,
    };
};
