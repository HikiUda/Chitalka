import { CatalogFilterSliceSelector } from '../../types';
import { SortBySlice } from './sortBySlice';
import { SortByType } from './sortBy';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useSortBy(slice: CatalogFilterSliceSelector<SortBySlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const sortBy = slice.sortBy();
    const setSortBy = slice.setSortBy();

    const handleSetSortBy = (sort: SortByType) => {
        setSortBy(sort);
        setSearchParam('sortBy', sort);
    };

    return {
        sortBy,
        setSortBy: handleSetSortBy,
    };
}
