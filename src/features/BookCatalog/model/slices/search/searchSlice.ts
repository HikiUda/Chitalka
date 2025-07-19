import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';

export type SearchSlice = {
    search: string;
    setSearch: (search: string) => void;
};

export const searchSliceInitialState: CatalogFilterInitialState<SearchSlice> = {
    search: '',
};

export const createSearchSlice: CatalogFilterSlice<SearchSlice> = (storeName) => (set) => ({
    ...searchSliceInitialState,
    setSearch: (search) => set(() => ({ search }), false, `${storeName}/setSearch`),
});
