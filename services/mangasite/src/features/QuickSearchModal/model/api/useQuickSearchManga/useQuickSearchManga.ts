import { useQuery } from '@tanstack/react-query';
import { QuickSearch } from '@/shared/api/mangaList';

export const API_QUICKSEARCH = 'manga/quick-search';

export const useQuickSearchManga = (search: string = '') => {
    //TODO lang support
    const query = useQuery(QuickSearch.quickSearchQueryOptions(search));

    return query;
};
