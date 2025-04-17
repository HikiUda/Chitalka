import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, SearchSlice } from '../../types/catalogFilters';

export const createSearchSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    SearchSlice
> = (set) => ({
    search: '',
    setSearch: (search) => set(() => ({ search }), false, 'CatalogFiltersStore/setSearch'),
});
