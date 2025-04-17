import { StateCreator } from 'zustand';
import { AgeRateSlice, CatalogFiltersStoreType } from '../../types/catalogFilters';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

export const createAgeRateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    AgeRateSlice
> = (set) => ({
    ageRateFrom: NaN,
    ageRateTo: NaN,
    setAgeRateFrom: (ageRateFrom) =>
        set(
            (state) => ({
                ageRateFrom: fromNoBiggerTo(ageRateFrom, state.ageRateTo),
            }),
            false,
            'CatalogFiltersStore/setAgeRateFrom',
        ),
    setAgeRateTo: (ageRateTo) =>
        set(
            (state) => ({
                ageRateTo: toNoLessFrom(state.ageRateFrom, ageRateTo),
            }),
            false,
            'CatalogFiltersStore/setAgeRateTo',
        ),
});
