import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, MangaStatusSlice } from '../../types/catalogFilters';

export const createMangaStatusSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    MangaStatusSlice
> = (set) => ({
    status: [],
    setStatus: (status) =>
        set(
            () => ({
                status,
            }),
            false,
            'CatalogFiltersStore/setStatus',
        ),
});
