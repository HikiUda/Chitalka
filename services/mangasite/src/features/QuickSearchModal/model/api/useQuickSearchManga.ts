import { useQuery } from '@tanstack/react-query';
import { $api } from '@packages/model/src/api/base';
import { MangaListItemStatistic } from '@packages/ui/src/entities/MangaCard';

interface UseQuickSearchMangaProps {
    search?: string;
}

export const useQuickSearchManga = ({ search }: UseQuickSearchMangaProps = { search: '' }) => {
    //TODO lang support
    const query = useQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: ['quickSearchManga'],
        queryFn: async () => {
            const mangas = await $api.get<MangaListItemStatistic[]>('/manga/quicksearch', {
                params: { search },
            });
            return mangas.data;
        },
    });

    return query;
};
