import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/kyBase';
import { MangaListItemStatisticType } from '@packages/ui/src/entities/MangaCard';

export const API_QUICKSEARCH = 'manga/quicksearch';

export const useQuickSearchManga = (search: string = '') => {
    //TODO lang support
    const query = useQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['quickSearchManga'],
        queryFn: async () => {
            const mangas = await $api
                .get<MangaListItemStatisticType[]>(API_QUICKSEARCH, {
                    searchParams: { search },
                })
                .json();
            return mangas;
        },
    });

    return query;
};
