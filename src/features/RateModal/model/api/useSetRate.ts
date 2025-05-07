import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MangaIdType } from '@/shared/entities/manga';
import { RateMangaApi } from '@/shared/api/individualManga';

export const useSetMangaRate = (id: MangaIdType) => {
    const queryClient = useQueryClient();
    const { mutate: setRate, isPending } = useMutation({
        mutationFn: (rate: number) => RateMangaApi.setRate(id, rate),
        onSuccess: (_, rate) => {
            const prevRate = queryClient.getQueryData(
                RateMangaApi.getUserRateQueryOptions(id).queryKey,
            );
            if (prevRate) {
                queryClient.setQueryData(RateMangaApi.getUserRateQueryOptions(id).queryKey, {
                    ...prevRate,
                    rate,
                });
            }
        },
    });

    return { setRate, isPending };
};
