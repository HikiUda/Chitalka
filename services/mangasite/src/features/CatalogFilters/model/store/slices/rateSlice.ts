import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, RateSlice } from '../../types/catalogFilters';

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
                rateFrom: Number.isFinite(state.rateTo)
                    ? Math.min(rateFrom, state.rateTo, 10)
                    : rateFrom,
            }),
            false,
            'CatalogFiltersStore/setRateFrom',
        ),
    setRateTo: (rateTo) =>
        set(
            (state) => ({
                rateTo: Number.isFinite(state.rateFrom)
                    ? Math.min(Math.max(state.rateFrom, rateTo), 10)
                    : rateTo,
            }),
            false,
            'CatalogFiltersStore/setRateTo',
        ),
});
