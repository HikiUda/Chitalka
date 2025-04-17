import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, RateCountSlice } from '../../types/catalogFilters';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

export const createRateCountSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    RateCountSlice
> = (set) => ({
    rateCountFrom: NaN,
    rateCountTo: NaN,
    setRateCountFrom: (rateCountFrom) =>
        set(
            (state) => ({
                rateCountFrom: fromNoBiggerTo(rateCountFrom, state.rateCountTo),
            }),
            false,
            'CatalogFiltersStore/setRateCountFrom',
        ),
    setRateCountTo: (rateCountTo) =>
        set(
            (state) => ({
                rateCountTo: toNoLessFrom(state.rateCountFrom, rateCountTo),
            }),
            false,
            'CatalogFiltersStore/setRateCountTo',
        ),
});
