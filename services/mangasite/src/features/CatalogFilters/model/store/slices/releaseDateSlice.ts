import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, ReleaseDateSlice } from '../../types/catalogFilters';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

export const createReleaseDateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    ReleaseDateSlice
> = (set) => ({
    releaseDateFrom: NaN,
    releaseDateTo: NaN,
    setReleaseDateFrom: (releaseDateFrom) =>
        set(
            (state) => ({
                releaseDateFrom: fromNoBiggerTo(releaseDateFrom, state.releaseDateTo),
            }),
            false,
            'CatalogFiltersStore/setReleaseDateFrom',
        ),
    setReleaseDateTo: (releaseDateTo) =>
        set(
            (state) => ({
                releaseDateTo: toNoLessFrom(state.releaseDateFrom, releaseDateTo),
            }),
            false,
            'CatalogFiltersStore/setReleaseDateTo',
        ),
});
