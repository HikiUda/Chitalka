import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { SortByType } from './sortBy';

export type SortBySlice = {
    sortBy: SortByType;
    setSortBy: (sortBy: SortByType) => void;
};

export const sortBySliceInitialState: CatalogFilterInitialState<SortBySlice> = {
    sortBy: 'rating',
};

export const createSortBySlice: CatalogFilterSlice<SortBySlice> = (storeName) => (set) => ({
    ...sortBySliceInitialState,
    setSortBy: (sortBy) => set(() => ({ sortBy }), false, `${storeName}/setSortBy`),
});
