import { CatalogFilterSliceSelector } from '../../types';
import { SortBySlice } from './sortBySlice';

export function useSortBy(slice: CatalogFilterSliceSelector<SortBySlice>) {
    const sortBy = slice.sortBy();
    const setSortBy = slice.setSortBy();

    return {
        sortBy,
        setSortBy,
    };
}
