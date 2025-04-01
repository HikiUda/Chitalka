import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/base';
import { MangaListItemStatistic } from '@packages/ui/src/entities/MangaCard';

export const API_QUICKSEARCH = '/manga/quicksearch';

export const useQuickSearchManga = (search: string = '') => {
    //TODO lang support
    const query = useQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['quickSearchManga'],
        queryFn: async () => {
            const mangas = await $api.get<MangaListItemStatistic[]>(API_QUICKSEARCH, {
                params: { search },
            });
            return mangas.data;
        },
    });

    return query;
};
