import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, ReleaseDateSlice } from '../../types/catalogFilters';

export const createReleaseDateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    ReleaseDateSlice
> = (set) => ({
    releaseDateFrom: null,
    releaseDateTo: null,
    setReleaseDateFrom: (releaseDateFrom) =>
        set(
            () => ({
                releaseDateFrom,
            }),
            false,
            'CatalogFiltersStore/setReleaseDateFrom',
        ),
    setReleaseDateTo: (releaseDateTo) =>
        set(
            () => ({
                releaseDateTo,
            }),
            false,
            'CatalogFiltersStore/setReleaseDateTo',
        ),
});
