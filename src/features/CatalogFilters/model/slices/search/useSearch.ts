import { CatalogFilterSliceSelector } from '../../types';
import { SearchSlice } from './searchSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useSearch(slice: CatalogFilterSliceSelector<SearchSlice>) {
    const { setSearchParam } = useUrlSearchParams();

    const search = slice.search();
    const setSeacrh = slice.setSearch();

    const handleSetSearch = (q: string) => {
        setSeacrh(q);
        setSearchParam('search', q);
    };

    return {
        search,
        setSearch: handleSetSearch,
    };
}
