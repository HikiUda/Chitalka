import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface SearchSlice {
    search: string;
    setSearch: (search: string) => void;
}

export const searchSliceInitialState: Pick<SearchSlice, 'search'> = {
    search: '',
};

export const createSearchSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    SearchSlice
> = (set) => ({
    ...searchSliceInitialState,
    setSearch: (search) => set(() => ({ search }), false, 'CatalogFiltersStore/setSearch'),
});
