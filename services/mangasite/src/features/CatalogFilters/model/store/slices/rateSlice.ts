import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, RateSlice } from '../../types/catalogFilters';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

export const createRateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    RateSlice
> = (set) => ({
    rateFrom: NaN,
    rateTo: NaN,
    setRateFrom: (rateFrom) =>
        set(
            (state) => ({
                rateFrom: fromNoBiggerTo(rateFrom, state.rateTo),
            }),
            false,
            'CatalogFiltersStore/setRateFrom',
        ),
    setRateTo: (rateTo) =>
        set(
            (state) => ({
                rateTo: toNoLessFrom(state.rateFrom, rateTo),
            }),
            false,
            'CatalogFiltersStore/setRateTo',
        ),
});
