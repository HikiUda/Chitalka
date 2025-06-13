import { CatalogFilterSliceSelector } from '../../types';
import { SearchSlice } from './searchSlice';

export function useSearch(slice: CatalogFilterSliceSelector<SearchSlice>) {
    const search = slice.search();
    const setSearch = slice.setSearch();

    return {
        search,
        setSearch,
    };
}
