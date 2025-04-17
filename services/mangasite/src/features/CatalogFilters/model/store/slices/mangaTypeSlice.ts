import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, MangaTypeSlice } from '../../types/catalogFilters';
import { checkBoxArray } from '../../helpers/checkBoxArray';

export const createMangaTypeSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    MangaTypeSlice
> = (set) => ({
    type: [],
    setType: (t) =>
        set(
            (state) => ({
                type: checkBoxArray(state.type, t),
            }),
            false,
            'CatalogFiltersStore/setType',
        ),
});
