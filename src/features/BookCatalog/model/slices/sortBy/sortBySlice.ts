import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';
import { SortBy } from './sortBy';

export type SortBySlice = {
    sortBy: SortBy;
    setSortBy: (sortBy: SortBy) => void;
};

export const sortBySliceInitialState: CatalogFilterInitialState<SortBySlice> = {
    sortBy: 'rating',
};

export const createSortBySlice: CatalogFilterSlice<SortBySlice> = (storeName) => (set) => ({
    ...sortBySliceInitialState,
    setSortBy: (sortBy) => set(() => ({ sortBy }), false, `${storeName}/setSortBy`),
});
