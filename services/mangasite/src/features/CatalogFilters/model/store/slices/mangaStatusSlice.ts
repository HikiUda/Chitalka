import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, MangaStatusSlice } from '../../types/catalogFilters';
import { checkBoxArray } from '../../helpers/checkBoxArray';

export const createMangaStatusSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    MangaStatusSlice
> = (set) => ({
    status: [],
    setStatus: (s) =>
        set(
            (state) => ({
                type: checkBoxArray(state.status, s),
            }),
            false,
            'CatalogFiltersStore/setStatus',
        ),
});
