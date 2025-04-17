import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, SortByOrderSlice } from '../../types/catalogFilters';

export const createSortByOrderSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    SortByOrderSlice
> = (set) => ({
    order: 'desc',
    sortBy: 'rating',
    setOrder: (order) => set(() => ({ order }), false, 'CatalogFiltersStore/setOrder'),
    setSortBy: (sortBy) => set(() => ({ sortBy }), false, 'CatalogFiltersStore/setSortBy'),
});
