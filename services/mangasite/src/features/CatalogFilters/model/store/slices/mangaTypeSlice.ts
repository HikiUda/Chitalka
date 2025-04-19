import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, MangaTypeSlice } from '../../types/catalogFilters';

export const createMangaTypeSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    MangaTypeSlice
> = (set) => ({
    type: [],
    setType: (type) =>
        set(
            () => ({
                type,
            }),
            false,
            'CatalogFiltersStore/setType',
        ),
});
